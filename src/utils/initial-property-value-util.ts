/**
 * Determines the default value to set the builder property to, based on the provided interface datatype.
 *
 * @param datatype The datatype of the property (e.g. number)
 */
export const getInitalPropertyValue = (datatype: string) => {
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
    case 'Guid':
      return 'Guid.NewGuid()'
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
      if (datatype.match(/<\w+\>/)) {
        return `new List<${datatype.match(/(?<=<)[\w]+/)}>()`
      }
      return null
  }
}
