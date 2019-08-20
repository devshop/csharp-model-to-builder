import { getInitalPropertyValue } from './initial-property-value-util'

describe('Initial Property Value Util', () => {
  it('should return the inital property value of `""` when the data type is a string', () => {
    // Arrange
    const dataType = 'string'
    const expectedValue = '""'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a sbyte', () => {
    // Arrange
    const dataType = 'sbyte'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a byte', () => {
    // Arrange
    const dataType = 'byte'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a short', () => {
    // Arrange
    const dataType = 'short'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a ushort', () => {
    // Arrange
    const dataType = 'ushort'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a int', () => {
    // Arrange
    const dataType = 'int'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a uint', () => {
    // Arrange
    const dataType = 'uint'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a long', () => {
    // Arrange
    const dataType = 'long'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0` when the data type is a ulong', () => {
    // Arrange
    const dataType = 'ulong'
    const expectedValue = 0

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0.0f` when the data type is a float', () => {
    // Arrange
    const dataType = 'float'
    const expectedValue = '0.0f'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0.0` when the data type is a double', () => {
    // Arrange
    const dataType = 'double'
    const expectedValue = '0.0'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `0.0m` when the data type is a decimal', () => {
    // Arrange
    const dataType = 'decimal'
    const expectedValue = '0.0m'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `false` when the data type is a bool', () => {
    // Arrange
    const dataType = 'bool'
    const expectedValue = false

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `X` when the data type is a char', () => {
    // Arrange
    const dataType = 'char'
    const expectedValue = "'X'"

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new DateTime(1970, 1, 1)` when the data type is a DateTime', () => {
    // Arrange
    const dataType = 'DateTime'
    const expectedValue = 'new DateTime(1970, 1, 1)'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `Guid.NewGuid()` when the data type is a Guid', () => {
    // Arrange
    const dataType = 'Guid'
    const expectedValue = 'Guid.NewGuid()'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new string[]{ "" }` when the data type is a string[]', () => {
    // Arrange
    const dataType = 'string[]'
    const expectedValue = 'new string[]{ "" }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new sbyte[]{ 0 }` when the data type is a sbyte[]', () => {
    // Arrange
    const dataType = 'sbyte[]'
    const expectedValue = 'new sbyte[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new byte[]{ 0 }` when the data type is a byte[]', () => {
    // Arrange
    const dataType = 'byte[]'
    const expectedValue = 'new byte[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new short[]{ 0 }` when the data type is a short[]', () => {
    // Arrange
    const dataType = 'short[]'
    const expectedValue = 'new short[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new ushort[]{ 0 }` when the data type is a ushort[]', () => {
    // Arrange
    const dataType = 'ushort[]'
    const expectedValue = 'new ushort[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new int[]{ 0 }` when the data type is an int[]', () => {
    // Arrange
    const dataType = 'int[]'
    const expectedValue = 'new int[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new uint[]{ 0 }` when the data type is a uint[]', () => {
    // Arrange
    const dataType = 'uint[]'
    const expectedValue = 'new uint[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new long[]{ 0 }` when the data type is a long[]', () => {
    // Arrange
    const dataType = 'long[]'
    const expectedValue = 'new long[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new ulong[]{ 0 }` when the data type is a ulong[]', () => {
    // Arrange
    const dataType = 'ulong[]'
    const expectedValue = 'new ulong[]{ 0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new float[]{ 0.0f }` when the data type is a float[]', () => {
    // Arrange
    const dataType = 'float[]'
    const expectedValue = 'new float[]{ 0.0f }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new double[]{ 0.0 }` when the data type is a double[]', () => {
    // Arrange
    const dataType = 'double[]'
    const expectedValue = 'new double[]{ 0.0 }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new decimal[]{ 0.0m }` when the data type is a decimal[]', () => {
    // Arrange
    const dataType = 'decimal[]'
    const expectedValue = 'new decimal[]{ 0.0m }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new bool[]{ false }` when the data type is a bool[]', () => {
    // Arrange
    const dataType = 'bool[]'
    const expectedValue = 'new bool[]{ false }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it("should return the inital property value of `new char[]{ 'X' }` when the data type is a char[]", () => {
    // Arrange
    const dataType = 'char[]'
    const expectedValue = "new char[]{ 'X' }"

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new DateTime[]{ new DateTime(1970, 1, 1) }` when the data type is a DateTime[]', () => {
    // Arrange
    const dataType = 'DateTime[]'
    const expectedValue = 'new DateTime[]{ new DateTime(1970, 1, 1) }'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `new List<Foo>()` when the data type is a IList<Foo>', () => {
    // Arrange
    const dataType = 'IList<Foo>'
    const expectedValue = 'new List<Foo>()'

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })

  it('should return the inital property value of `null` when the data type is a unknown', () => {
    // Arrange
    const dataType = 'foo>'
    const expectedValue = null

    // Act
    const value = getInitalPropertyValue(dataType)

    // Assert
    expect(value).toBe(expectedValue)
  })
})
