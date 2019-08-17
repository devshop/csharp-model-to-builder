import { getModelName } from './model-name-util'

describe('Model Name Util', () => {
  it('should return the name of the model in the file', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const name = getModelName(
      `namespace Test
      {
          public class TestModel
          {
              public string StringTest { get; set; }
          }
      }`,
      windowMock as any
    )
    expect(name).toBe('TestModel')
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return the name of the model in the file in an abstract class', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const name = getModelName(
      `namespace Test
      {
          public abstract class TestModel
          {
              public string StringTest { get; set; }
          }
      }`,
      windowMock as any
    )
    expect(name).toBe('TestModel')
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return null and an error message if the model name in the file is not found', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const name = getModelName('foo bar', windowMock as any)
    expect(name).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })
})
