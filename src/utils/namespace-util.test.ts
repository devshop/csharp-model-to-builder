import { getNamespace } from './namespace-util'

describe('Namespace Util', () => {
  it('should return the namespace in the file', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const namespace = getNamespace(
      `namespace Test
      {
          public class TestModel
          {
              public string StringTest { get; set; }
          }
      }`,
      windowMock as any
    )
    expect(namespace).toBe('Test')
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return null and an error message if the namespace in the file is not found', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const name = getNamespace('foo bar', windowMock as any)
    expect(name).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })
})
