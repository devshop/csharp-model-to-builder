import { getNamespace } from './namespace-util'

describe('Namespace Util', () => {
  it('should return the namespace in the file', () => {
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
    const namespace = getNamespace(text, windowMock as any)

    // Assert
    expect(namespace).toBe('Test')
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return null and an error message if the namespace in the file is not found', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = 'foo bar'

    // Act
    const name = getNamespace(text, windowMock as any)

    // Assert
    expect(name).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })
})
