import { getModelProperties } from './model-properties-util'

describe('Model Properties Util', () => {
  it('should return null and an error message if no properties are found in the file', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const properties = getModelProperties('foo bar', windowMock as any)
    expect(properties).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })

  it('should return a list of properties and no error message if properties are found in the file', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const properties = getModelProperties(
      `public class TestModel {
        public string Foo { get; set; }
        public int Bar { get; set; }
      }`,
      windowMock as any
    )
    expect(properties).toEqual(['Foo', 'Bar'])
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })
})
