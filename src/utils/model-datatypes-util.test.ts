import { getModelDatatypes } from './model-datatypes-util'

describe('Model Datatypes Util', () => {
  it('should return null and an error message if no datatypes are found in the file', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const datatypes = getModelDatatypes(
      'public class TestModel{}}',
      windowMock as any
    )
    expect(datatypes).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })

  it('should return a list of datatypes and no error message if datatypes are found in the file', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const datatypes = getModelDatatypes(
      `public class TestModel {
        public string Foo { get; set; }
        public int Bar { get; set; }
      }`,
      windowMock as any
    )
    expect(datatypes).toEqual(['string', 'int'])
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should remove the `virtual` keyword', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const datatypes = getModelDatatypes(
      `public class TestModel {
        public long DepartmentId { get; set; }
        public virtual Department Department { get; set; }
      }`,
      windowMock as any
    )
    expect(datatypes).toEqual(['long', 'Department'])
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })
})
