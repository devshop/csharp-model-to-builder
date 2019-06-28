import * as fs from 'fs'
import * as path from 'path'
import * as vscode from 'vscode'

interface IPropertyOutput {
  definitions: string[]
  externalSetters: string[]
  localSetters: string[]
}

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    'extension.modelToBuilder',
    () => {
      const b = '\r\n' // line break
      const t = '\t' // indenting (tab)
      const e = ';' // line-ending (semicolon)

      const lowercaseFirstLetter = (s: string) =>
        s.charAt(0).toLowerCase() + s.slice(1)

      const verifyWorkspaceLoaded = () => {
        if (!vscode.workspace.workspaceFolders) {
          vscode.window.showErrorMessage(
            'Please open a directory before creating a builder.'
          )
          return false
        }
        return true
      }

      const verifyTextEditorOpen = () => {
        if (!vscode.window.activeTextEditor) {
          vscode.window.showErrorMessage(
            'No open text editor. Please open a model file.'
          )
          return false
        }
        return true
      }

      const verifyTextInEditor = (text: string | null) => {
        if (!text) {
          vscode.window.showErrorMessage(
            'No text found. Please open a model file.'
          )
          return false
        }
        return true
      }

      const verifyModelInText = (text: string) => {
        if (!text.includes('public class')) {
          vscode.window.showErrorMessage(
            'No model found. "public class" must be in your code.'
          )
          return false
        }
        return true
      }

      const getNamespace = (text: string) => {
        // Search for words after "namespace".
        const namespace = text.match(/(?<=\bnamespace\s)(.+)/)
        if (!namespace) {
          vscode.window.showErrorMessage('Could not find the namespace.')
          return null
        }
        return namespace[0]
      }

      const getModelName = (text: string) => {
        // Search for the first word after "public class" to find the name of the model.
        const modelNames = text.match(/(?<=\bpublic class\s)(\w+)/)
        if (!modelNames) {
          vscode.window.showErrorMessage('Could not find the model name.')
          return null
        }
        return modelNames[0]
      }

      const getModelProperties = (text: string) => {
        // Find all the properties defined in the model
        // by looking for words before `{ get;`
        const properties = text.match(/(?!\s)\w+(?=\s*{\s*get;)/gm)
        if (!properties) {
          vscode.window.showErrorMessage(
            'Could not find any properties defined in the model.'
          )
          return null
        }
        return properties
      }

      const getModelDatatypes = (text: string) => {
        // Find all the property types defined in the model
        // by looking for words after `public` but exclude `public class`
        const datatypes = text.match(/(?<=public\s)(?!class)[\w\?\[\]]+/g)
        if (!datatypes) {
          vscode.window.showErrorMessage(
            'Could not find any datatypes defined in the model.'
          )
          return null
        }
        return datatypes
      }

      const generatePropertyOutput = (
        modelName: string,
        properties: string[],
        datatypes: string[]
      ): IPropertyOutput => {
        const output: IPropertyOutput = {
          definitions: [],
          externalSetters: [],
          localSetters: []
        }

        properties.forEach((p, i) => {
          const datatype = datatypes[i]
          const value = getInitalPropertyValue(datatype)
          let lowercaseProp = lowercaseFirstLetter(p)
          output.definitions.push(
            `private ${datatype} _${lowercaseProp} = ${value}${e}`
          )
          // Strip any '?' from optional properties
          lowercaseProp = lowercaseProp.replace('?', '')
          output.localSetters.push(`${p} = _${lowercaseProp}`)
          let propertyExternalSetter = ''
          propertyExternalSetter += `public ${modelName}Builder With${p}(${datatype} value)${b}`
          propertyExternalSetter += `${t}${t}{${b}`
          propertyExternalSetter += `${t}${t}${t}_${lowercaseProp} = value${e}${b}`
          propertyExternalSetter += `${t}${t}${t}return this${e}${b}`
          propertyExternalSetter += `${t}${t}}`
          output.externalSetters.push(propertyExternalSetter)
        })
        return output
      }

      const generateClass = (
        namespace: string,
        modelName: string,
        output: IPropertyOutput
      ): string => {
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
        classString += `${t}${t}${t}}${e}${b}`
        classString += `${b}`
        classString += `${t}${t}${externalSetters}${b}`
        classString += `${t}}${b}`
        classString += `}${b}`
        return classString
      }

      const saveBuilderFile = (editor: vscode.TextEditor, text: string) => {
        const filePath = editor!.document.uri.fsPath
        const fileName = filePath.match(/[^\\/]+(?=\.cs)/)![0]
        let folderPath = filePath.substring(0, filePath.lastIndexOf('/'))
        if (!folderPath) {
          folderPath = filePath.substring(0, filePath.lastIndexOf('\\'))
        }
        // Writes the file to the current editor directory
        fs.writeFile(
          path.join(folderPath, `${fileName}Builder.cs`),
          text,
          err => {
            if (err) {
              vscode.window.showErrorMessage(`File save failed: ${err}`)
              return
            }
          }
        )
        vscode.window.showInformationMessage(
          `Builder class saved to: ${path.join(
            folderPath,
            `${fileName}Builder.cs`
          )}`
        )
      }

      const getInitalPropertyValue = (datatype: string) => {
        switch (datatype) {
          case 'string':
            return '""'
          case 'sbyte':
          case 'byte':
          case 'short':
          case 'ushort':
          case 'int':
          case 'uint':
          case 'long':
          case 'ulong':
            return 0
          case 'float':
            return '0.0f'
          case 'double':
            return '0.0'
          case 'decimal':
            return '0.0m'
          case 'bool':
            return false
          case 'char':
            return "'X'"
          case 'DateTime':
            return 'new DateTime(1970, 1, 1)'
          case 'string[]':
            return 'new string[]{ "" }'
          case 'sbyte[]':
            return 'new sbyte[]{ 0 }'
          case 'byte[]':
            return 'new byte[]{ 0 }'
          case 'short[]':
            return 'new short[]{ 0 }'
          case 'ushort[]':
            return 'new ushort[]{ 0 }'
          case 'int[]':
            return 'new int[]{ 0 }'
          case 'uint[]':
            return 'new uint[]{ 0 }'
          case 'long[]':
            return 'new long[]{ 0 }'
          case 'ulong[]':
            return 'new ulong[]{ 0 }'
          case 'float[]':
            return 'new float[]{ 0.0f }'
          case 'double[]':
            return 'new double[]{ 0.0 }'
          case 'decimal[]':
            return 'new decimal[]{ 0.0m }'
          case 'bool[]':
            return 'new bool[]{ false }'
          case 'char[]':
            return "new char[]{ 'X' }"
          case 'DateTime[]':
            return 'new DateTime[]{ new DateTime(1970, 1, 1) }'
          default:
            return null
        }
      }

      const start = () => {
        const isWorkspaceLoaded = verifyWorkspaceLoaded()
        if (!isWorkspaceLoaded) {
          return
        }
        const isEditorOpen = verifyTextEditorOpen()
        if (!isEditorOpen) {
          return
        }
        const editor = vscode.window.activeTextEditor
        if (!editor) {
          return
        }
        const text = editor.document.getText()
        const isTextInEditor = verifyTextInEditor(text)
        if (!isTextInEditor) {
          return
        }
        const isModelInText = verifyModelInText(text)
        if (!isModelInText) {
          return
        }
        const namespace = getNamespace(text)
        if (!namespace) {
          return
        }
        const modelName = getModelName(text)
        if (!modelName) {
          return
        }
        const properties = getModelProperties(text)
        const datatypes = getModelDatatypes(text)
        if (!properties || !datatypes) {
          return
        }
        const propertyOutput = generatePropertyOutput(
          modelName,
          properties,
          datatypes
        )
        const classString = generateClass(namespace, modelName, propertyOutput)
        saveBuilderFile(editor, classString)
      }

      start()
    }
  )

  context.subscriptions.push(disposable)
}
