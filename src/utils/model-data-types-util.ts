import { IWindow } from '../interfaces/window.interface'

/**
 * Extracts the property data types that are defined in the model.
 *
 * @param text      The model text
 * @param window    The VSCode Window
 */
export const getModelDataTypes = (text: string, window: IWindow) => {
  // Strip out `virtual ` keyword
  text = text.replace(/virtual /g, '')
  // Find all the property types defined in the model
  // by looking for words after `public` but exclude `public class`
  const datatypes = text.match(/(?<=public\s)(?!class)[\w\?\<\>\[\]]+/g)
  if (!datatypes) {
    window.showErrorMessage(
      'Could not find any data types defined in the model.'
    )
    return null
  }
  return datatypes
}
