import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'

import {
  isTextEditorOpen,
  isTextInEditor,
  isWorkspaceLoaded
} from './utils/workspace-util'

import { IPropertyOutput } from './interfaces/property-output.interface'
import { IWindow } from './interfaces/window.interface'
import { getInitalPropertyValue } from './utils/initial-property-value-util'
import { getModelDataTypes } from './utils/model-data-types-util'
import { getModelName } from './utils/model-name-util'
import { getModelProperties } from './utils/model-properties-util'
import { getNamespace } from './utils/namespace-util'
import { lowercaseFirstLetter } from './utils/string-util'

const lineBreak = '\r\n'
const indent = '  ' // (e.g. tab vs spaces)

export const execute = (workspaceRoot: string, window: IWindow) => {
  if (!isWorkspaceLoaded(workspaceRoot, window)) return
  if (!isTextEditorOpen(window)) return
  const editor = window.activeTextEditor
  const text = editor.document.getText()
  if (!isTextInEditor(text, window)) return
  const namespace = getNamespace(text, window)
  if (!namespace) return
  const modelName = getModelName(text, window)
  if (!modelName) return
  const properties = getModelProperties(text, window)
  const dataTypes = getModelDataTypes(text, window)
  if (!properties || !dataTypes) return
  const propertyOutput = generatePropertyOutput(
    modelName,
    properties,
    dataTypes
  )
  const classString = generateClass(namespace, modelName, propertyOutput)
  saveBuilderFile(window, editor, classString)
}

export const generateClass = (
  namespace: string,
  modelName: string,
  output: IPropertyOutput
): string => {
  const t = indent
  const b = lineBreak
  const definitions = output.definitions.join(`${b}${t}${t}`)
  const localSetters = output.localSetters.join(`,${b}${t}${t}${t}${t}`)
  const externalSetters = output.externalSetters.join(`${b}${b}${t}${t}`)
  let classString = `using System;${b}${b}`
  classString += `namespace ${namespace}${b}`
  classString += `{${b}`
  classString += `${t}public class ${modelName}Builder${b}`
  classString += `${t}{${b}`
  classString += `${t}${t}${definitions}${b}${b}`
  classString += `${t}${t}public ${modelName} Build() =>${b}`
  classString += `${t}${t}${t}new ${modelName}${b}`
  classString += `${t}${t}${t}{${b}`
  classString += `${t}${t}${t}${t}${localSetters}${b}`
  classString += `${t}${t}${t}};${b}`
  classString += `${b}`
  classString += `${t}${t}${externalSetters}${b}`
  classString += `${t}}${b}`
  classString += `}${b}`
  return classString
}

export const generatePropertyOutput = (
  modelName: string,
  properties: string[],
  dataTypes: string[]
): IPropertyOutput => {
  const output: IPropertyOutput = {
    definitions: [],
    externalSetters: [],
    localSetters: []
  }
  properties.forEach((p, i) => {
    const t = indent
    const b = lineBreak
    const dataType = dataTypes[i]
    const value = getInitalPropertyValue(dataType)
    let lowercaseProp = lowercaseFirstLetter(p)
    output.definitions.push(`private ${dataType} _${lowercaseProp} = ${value};`)
    // Strip any '?' from optional properties
    lowercaseProp = lowercaseProp.replace('?', '')
    output.localSetters.push(`${p} = _${lowercaseProp}`)
    let propertyExternalSetter = ''
    propertyExternalSetter += `public ${modelName}Builder With${p}(${dataType} value)${b}`
    propertyExternalSetter += `${t}${t}{${b}`
    propertyExternalSetter += `${t}${t}${t}_${lowercaseProp} = value;${b}`
    propertyExternalSetter += `${t}${t}${t}return this;${b}`
    propertyExternalSetter += `${t}${t}}`
    output.externalSetters.push(propertyExternalSetter)
  })
  return output
}

export const saveBuilderFile = (
  window: IWindow,
  editor: vscode.TextEditor,
  text: string
) => {
  const filePath = editor!.document.uri.fsPath
  const fileName = filePath.match(/[^\\/]+(?=\.cs)/)![0]

  // Writes the file to the current editor directory
  try {
    let folderPath = filePath.substring(0, filePath.lastIndexOf('/'))
    if (!folderPath) {
      folderPath = filePath.substring(0, filePath.lastIndexOf('\\'))
    }
    // Writes the file to the current editor directory
    fs.writeFileSync(path.join(folderPath, `${fileName}Builder.cs`), text)
    window.showInformationMessage(
      `Builder class saved to: ${path.join(
        folderPath,
        `${fileName}Builder.ts`
      )}`
    )
  } catch (err) {
    window.showErrorMessage(`File save failed: ${err}`)
  }
}
