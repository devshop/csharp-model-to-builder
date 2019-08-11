/**
 * Converts the first letter of a string to lowercase.
 *
 * @param s The string to convert
 */
export const lowercaseFirstLetter = (s: string) =>
  s.charAt(0).toLowerCase() + s.slice(1)
