import { IWindow } from '../interfaces/window.interface'

/**
 * Extracts the name of the model.
 *
 * @param text      The model text
 * @param window    The VSCode Window
 */
export const getModelName = (text: string, window: IWindow) => {
  // Strip out `abstract ` modifier
  text = text.replace(/abstract /g, '')
  // Search for the first word after "public class" to find the name of the model.
  const modelNames = text.match(/(?<=\bpublic class\s)(\w+)/)
  if (!modelNames) {
    window.showErrorMessage('Could not find the model name.')
    return null
  }
  return modelNames[0]
}
