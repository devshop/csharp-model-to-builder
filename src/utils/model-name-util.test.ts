import { getModelName } from './model-name-util'

describe('Model Name Util', () => {
  it('should return the name of the model in the file', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = `namespace Test
    {
        public class TestModel
        {
            public string StringTest { get; set; }
        }
    }`

    // Act
    const name = getModelName(text, windowMock as any)

    // Assert
    expect(name).toBe('TestModel')
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return the name of the model in the file in an abstract class', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = `namespace Test
    {
        public abstract class TestModel
        {
            public string StringTest { get; set; }
        }
    }`

    // Act
    const name = getModelName(text, windowMock as any)

    // Assert
    expect(name).toBe('TestModel')
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return null and an error message if the model name in the file is not found', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = 'foo bar'

    // Act
    const name = getModelName(text, windowMock as any)

    // Assert
    expect(name).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })
})
