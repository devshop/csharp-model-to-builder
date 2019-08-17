import { getInitalPropertyValue } from './initial-property-value-util'

describe('Initial Property Value Util', () => {
  it('should return the inital property value of `""` when the datatype is a string', () => {
    expect(getInitalPropertyValue('string')).toBe('""')
  })

  it('should return the inital property value of `0` when the datatype is a sbyte', () => {
    expect(getInitalPropertyValue('sbyte')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a byte', () => {
    expect(getInitalPropertyValue('byte')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a short', () => {
    expect(getInitalPropertyValue('short')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a ushort', () => {
    expect(getInitalPropertyValue('ushort')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a int', () => {
    expect(getInitalPropertyValue('int')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a uint', () => {
    expect(getInitalPropertyValue('uint')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a long', () => {
    expect(getInitalPropertyValue('long')).toBe(0)
  })

  it('should return the inital property value of `0` when the datatype is a ulong', () => {
    expect(getInitalPropertyValue('ulong')).toBe(0)
  })

  it('should return the inital property value of `0.0f` when the datatype is a float', () => {
    expect(getInitalPropertyValue('float')).toBe('0.0f')
  })

  it('should return the inital property value of `0.0` when the datatype is a double', () => {
    expect(getInitalPropertyValue('double')).toBe('0.0')
  })

  it('should return the inital property value of `0.0m` when the datatype is a decimal', () => {
    expect(getInitalPropertyValue('decimal')).toBe('0.0m')
  })

  it('should return the inital property value of `false` when the datatype is a bool', () => {
    expect(getInitalPropertyValue('bool')).toBe(false)
  })

  it('should return the inital property value of `X` when the datatype is a char', () => {
    expect(getInitalPropertyValue('char')).toBe("'X'")
  })

  it('should return the inital property value of `new DateTime(1970, 1, 1)` when the datatype is a DateTime', () => {
    expect(getInitalPropertyValue('DateTime')).toBe('new DateTime(1970, 1, 1)')
  })

  it('should return the inital property value of `Guid.NewGuid()` when the datatype is a Guid', () => {
    expect(getInitalPropertyValue('Guid')).toBe('Guid.NewGuid()')
  })

  it('should return the inital property value of `new string[]{ "" }` when the datatype is a string[]', () => {
    expect(getInitalPropertyValue('string[]')).toBe('new string[]{ "" }')
  })

  it('should return the inital property value of `new sbyte[]{ 0 }` when the datatype is a sbyte[]', () => {
    expect(getInitalPropertyValue('sbyte[]')).toBe('new sbyte[]{ 0 }')
  })

  it('should return the inital property value of `new byte[]{ 0 }` when the datatype is a byte[]', () => {
    expect(getInitalPropertyValue('byte[]')).toBe('new byte[]{ 0 }')
  })

  it('should return the inital property value of `new short[]{ 0 }` when the datatype is a short[]', () => {
    expect(getInitalPropertyValue('short[]')).toBe('new short[]{ 0 }')
  })

  it('should return the inital property value of `new ushort[]{ 0 }` when the datatype is a ushort[]', () => {
    expect(getInitalPropertyValue('ushort[]')).toBe('new ushort[]{ 0 }')
  })

  it('should return the inital property value of `new int[]{ 0 }` when the datatype is an int[]', () => {
    expect(getInitalPropertyValue('int[]')).toBe('new int[]{ 0 }')
  })

  it('should return the inital property value of `new uint[]{ 0 }` when the datatype is a uint[]', () => {
    expect(getInitalPropertyValue('uint[]')).toBe('new uint[]{ 0 }')
  })

  it('should return the inital property value of `new long[]{ 0 }` when the datatype is a long[]', () => {
    expect(getInitalPropertyValue('long[]')).toBe('new long[]{ 0 }')
  })

  it('should return the inital property value of `new ulong[]{ 0 }` when the datatype is a ulong[]', () => {
    expect(getInitalPropertyValue('ulong[]')).toBe('new ulong[]{ 0 }')
  })

  it('should return the inital property value of `new float[]{ 0.0f }` when the datatype is a float[]', () => {
    expect(getInitalPropertyValue('float[]')).toBe('new float[]{ 0.0f }')
  })

  it('should return the inital property value of `new double[]{ 0.0 }` when the datatype is a double[]', () => {
    expect(getInitalPropertyValue('double[]')).toBe('new double[]{ 0.0 }')
  })

  it('should return the inital property value of `new decimal[]{ 0.0m }` when the datatype is a decimal[]', () => {
    expect(getInitalPropertyValue('decimal[]')).toBe('new decimal[]{ 0.0m }')
  })

  it('should return the inital property value of `new bool[]{ false }` when the datatype is a bool[]', () => {
    expect(getInitalPropertyValue('bool[]')).toBe('new bool[]{ false }')
  })

  it("should return the inital property value of `new char[]{ 'X' }` when the datatype is a char[]", () => {
    expect(getInitalPropertyValue('char[]')).toBe("new char[]{ 'X' }")
  })

  it('should return the inital property value of `new DateTime[]{ new DateTime(1970, 1, 1) }` when the datatype is a DateTime[]', () => {
    expect(getInitalPropertyValue('DateTime[]')).toBe(
      'new DateTime[]{ new DateTime(1970, 1, 1) }'
    )
  })

  it('should return the inital property value of `new List<Foo>()` when the datatype is a IList<Foo>', () => {
    expect(getInitalPropertyValue('IList<Foo>')).toBe('new List<Foo>()')
  })

  it('should return the inital property value of `null` when the datatype is a unknown', () => {
    expect(getInitalPropertyValue('foo')).toBe(null)
  })
})
