import { IWindow } from '../interfaces/window.interface'

/**
 * Extracts the namespace of the model.
 *
 * @param text The model text
 */
export const getNamespace = (text: string, window: IWindow) => {
  // Search for words after "namespace".
  const namespace = text.match(/(?<=\bnamespace\s)(.+)/)
  if (!namespace) {
    window.showErrorMessage('Could not find the namespace.')
    return null
  }
  return namespace[0]
}
