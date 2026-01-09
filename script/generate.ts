import ts from "typescript";
import * as fs from "node:fs";
import * as path from "node:path";
import { fileURLToPath } from "node:url";
import { transformTagName } from "./lib.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filename = path.resolve(__dirname, "../src", "builder.ts");
console.log(`Generating file at: ${filename}`);
// Track processed types to avoid duplicates
const processedTypes = new Set<string>();

function createDomTsProgram() {
  const options: ts.CompilerOptions = {
    target: ts.ScriptTarget.Latest,
    lib: ["lib.dom.d.ts"],
  };

  const defaultLibPath = ts.getDefaultLibFilePath(options);
  const program = ts.createProgram([defaultLibPath], options);
  return program;
}
const program = createDomTsProgram();
const checker = program.getTypeChecker();

function resolveSymbol(name: string, flags: ts.SymbolFlags) {
  return checker.resolveName(name, undefined, flags, false);
}

const TAG_MAPS = [
  "HTMLElementTagNameMap",
  "SVGElementTagNameMap",
  "MathMLElementTagNameMap",
];
const tags = new Set();
function generateHTMLElementBuilders() {
  fs.writeFileSync(filename, "// Auto-generated file\n\n");
  fs.appendFileSync(
    filename,
    'import type { ReactiveValue } from "./types";\n'
  );
  fs.appendFileSync(
    filename,
    'import { reactive, ReactiveElement } from "./core";\n'
  );

  TAG_MAPS.forEach((mapName) => {
    const tagNameMap = resolveSymbol(mapName, ts.SymbolFlags.Interface);

    if (!tagNameMap) throw new Error("Could not find HTMLElementTagNameMap");

    for (const [name, tag] of tagNameMap.members) {
      const elementType = checker.getTypeOfSymbolAtLocation(
        tag,
        tag.valueDeclaration!
      );
      processTypeHierarchy(elementType);
      const elementCls = checker.typeToString(elementType);

      if (tags.has(name)) continue;
      tags.add(name);
      const finalName = transformTagName(name as string);

      fs.appendFileSync(
        filename,
        `
export const ${finalName} = () => reactive(document.createElement("${name}")) as ReactiveElement & ${elementCls}Builder;
            `
      );
    }
  });
}

// Helper function to get unique own properties (not inherited from base types)
function writeProperties(type: ts.Type) {
  const allProperties = checker.getPropertiesOfType(type);
  const baseTypes = type.getBaseTypes().filter((baseType) => {
    const baseTypeName = baseType.getSymbol()?.getName();
    return baseTypeName !== undefined && !BASE_TYPES.includes(baseTypeName);
  });

  // Get all inherited property names
  const inheritedProps = new Set<string>();

  baseTypes.forEach((baseType) => {
    checker.getPropertiesOfType(baseType).forEach((prop) => {
      inheritedProps.add(prop.getName());
    });
  });

  allProperties.forEach((prop) => {
    const name = prop.getName();

    // Skip inherited properties to keep them unique
    if (inheritedProps.has(name)) return;
    if (name.startsWith("on")) return; // Skip event handlers

    const declarations = prop.getDeclarations();
    if (!declarations) return;
    const method = declarations.find(ts.isMethodSignature);
    // TODO: support setter methods
    // TODO: on events
    if (method) return; // Skip methods

    const property = declarations.find(ts.isPropertySignature);

    const getter = declarations.find(ts.isGetAccessor);
    if (getter) {
      const propType = getterParam(prop, getter);
      if (propType.flags & ts.TypeFlags.Object) {
        // TODO: object chaining support
        console.log(
          "Object chaining not supported yet for",
          name,
          checker.typeToString(propType)
        );
      }
    } else if (property) {
      const propType = checker.getTypeOfSymbolAtLocation(prop, property);
      if (propType.flags & ts.TypeFlags.Object) {
        // TODO: object chaining support
        console.log(
          "Object chaining not supported yet for",
          name,
          checker.typeToString(propType)
        );
      }
    }

    const setter = declarations.find(ts.isSetAccessor);
    if (setter) {
      const paramType = setterParam(setter);
      let typeString = checker.typeToString(paramType);
      fs.appendFileSync(
        filename,
        `  ${name}(value: ReactiveValue<${typeString}>): this;\n`
      );
    } else if (property && !isReadonly(prop)) {
      const propType = checker.getTypeOfSymbolAtLocation(prop, property);
      let typeString = checker.typeToString(propType);
      fs.appendFileSync(
        filename,
        `  ${name}(value: ReactiveValue<${typeString}>): this;\n`
      );
    }
  });
}

const BASE_TYPES = [
  "HTMLElement",
  "Element",
  "Node",
  "EventTarget",
  "SVGElement",
  "SVGGraphicsElement",
  "MathMLElement",
];

// Process a type and its base types recursively
function processTypeHierarchy(type: ts.Type): string[] {
  const symbol = type.getSymbol();
  if (!symbol) return [];

  const typeName = symbol.getName();
  if (typeName === "__type") {
    return [];
  }
  // If already processed, return just the name
  if (processedTypes.has(typeName)) {
    return [typeName];
  }

  processedTypes.add(typeName);

  // Process base types first
  const baseTypes = type.getBaseTypes().filter((baseType) => {
    const baseTypeName = baseType.getSymbol()?.getName();
    return baseTypeName !== undefined && BASE_TYPES.includes(baseTypeName);
  });
  const baseTypeNames: string[] = [];

  baseTypes.forEach((baseType) => {
    const processed = processTypeHierarchy(baseType);
    baseTypeNames.push(...processed);
  });

  // Get unique base type names for extends clause
  const uniqueBaseNames = [...new Set(baseTypeNames)];

  // Generate interface
  const extendsClause =
    uniqueBaseNames.length > 0
      ? ` extends ${uniqueBaseNames.map((name) => `${name}Builder`).join(", ")}`
      : "";

  fs.appendFileSync(
    filename,
    `interface ${typeName}Builder${extendsClause} {\n`
  );

  // Get only own properties (not inherited)
  writeProperties(type);

  fs.appendFileSync(filename, "}\n\n");

  return [typeName];
}

function setterParam(setter: ts.SetAccessorDeclaration) {
  const setterParams = setter.parameters;
  if (setterParams.length !== 1) return;
  return checker.getTypeAtLocation(setterParams[0]);
}

function getterParam(prop: ts.Symbol, getter: ts.GetAccessorDeclaration) {
  return checker.getTypeOfSymbolAtLocation(prop, getter);
}

function isReadonly(prop: ts.Symbol) {
  const flags = prop.valueDeclaration
    ? ts.getCombinedModifierFlags(prop.valueDeclaration)
    : 0;

  if (flags & ts.ModifierFlags.Readonly) return true;

  return false;
}
generateHTMLElementBuilders();
