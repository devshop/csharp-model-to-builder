import { IWindow } from '../interfaces/window.interface'

/**
 * Extracts the properties that are defined in the model.
 *
 * @param text      The model text
 * @param window    The VSCode Window
 */
export const getModelProperties = (text: string, window: IWindow) => {
  // Find all the properties defined in the model
  // by looking for words before `{ get;`
  const properties = text.match(/(?!\s)\w+(?=\s*{\s*get;)/gm)
  if (!properties) {
    window.showErrorMessage(
      'Could not find any properties defined in the model.'
    )
    return null
  }
  return properties
}
