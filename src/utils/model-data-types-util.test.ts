import { getModelDataTypes } from './model-data-types-util'

describe('Model Datatypes Util', () => {
  it('should return null and an error message if no data types are found in the file', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = 'public class TestModel{}}'

    // Act
    const datatypes = getModelDataTypes(
      text,
      windowMock as any
    )

    // Assert
    expect(datatypes).toBe(null)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })

  it('should return a list of datatypes and no error message if data types are found in the file', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = `public class TestModel {
      public string Foo { get; set; }
      public int Bar { get; set; }
    }`

    // Act
    const datatypes = getModelDataTypes(
      text,
      windowMock as any
    )

    // Assert
    expect(datatypes).toEqual(['string', 'int'])
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should remove the `virtual` keyword', () => {
    // Arrange
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const text = `public class TestModel {
      public long DepartmentId { get; set; }
      public virtual Department Department { get; set; }
    }`

    // Act
    const datatypes = getModelDataTypes(
      text,
      windowMock as any
    )

    // Assert
    expect(datatypes).toEqual(['long', 'Department'])
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })
})
