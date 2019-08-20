import { lowercaseFirstLetter } from './string-util'

describe('String Util', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should lowercase the first letter of a word', () => {
    // Arrange
    const text = 'FooBar'

    // Act
    const word = lowercaseFirstLetter(text)

    // Assert
    expect(word).toBe('fooBar')
  })
})
