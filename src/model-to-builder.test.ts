import * as fs from 'fs'
import * as modelToBuilder from './model-to-builder'

import { IPropertyOutput } from './interfaces/property-output.interface'
import { PropertyOutputBuilder } from './interfaces/property-output.interface.builder'

jest.mock('fs')

describe('Model To Builder', () => {
  const testRootLinux = 'fake/path/to/test'
  const testRootWindows = 'fake\\path\\to\\test'

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should stop execution if workspace is not loaded', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute('', windowMock as any)

    expect(windowMock.showErrorMessage).toHaveBeenCalledWith(
      'Please open a directory before creating a builder.'
    )
    expect(modelToBuilder.generatePropertyOutput).not.toHaveBeenCalled()
    expect(modelToBuilder.generateClass).not.toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).not.toHaveBeenCalled()
  })

  it('should stop execution if text editor is not open', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }

    jest.mock('./utils/workspace-util', () => ({
      isTextEditorOpen: jest.fn().mockReturnValue(false)
    }))

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute(testRootLinux, windowMock as any)

    expect(windowMock.showErrorMessage).toHaveBeenCalledWith(
      'No open text editor. Please open a model file.'
    )
    expect(modelToBuilder.generatePropertyOutput).not.toHaveBeenCalled()
    expect(modelToBuilder.generateClass).not.toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).not.toHaveBeenCalled()
  })

  it('should stop execution if no text is not found in the active text editor', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest.fn().mockReturnValue('')
        }
      },
      showErrorMessage: jest.fn()
    }

    jest.mock('./utils/workspace-util', () => ({
      isTextEditorOpen: jest.fn().mockReturnValue(true)
    }))

    jest.mock('./utils/string-util', () => ({
      isTextInEditor: jest.fn().mockReturnValue(true)
    }))

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute(testRootLinux, windowMock as any)

    expect(windowMock.showErrorMessage).toHaveBeenCalled()
    expect(modelToBuilder.generatePropertyOutput).not.toHaveBeenCalled()
    expect(modelToBuilder.generateClass).not.toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).not.toHaveBeenCalled()
  })

  it('should stop execution if no namespace is found in the active text editor', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest.fn().mockReturnValue('foo')
        }
      },
      showErrorMessage: jest.fn()
    }

    jest.mock('./utils/workspace-util', () => ({
      isTextEditorOpen: jest.fn().mockReturnValue(true)
    }))

    jest.mock('./utils/string-util', () => ({
      isTextInEditor: jest.fn().mockReturnValue(true)
    }))

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute(testRootLinux, windowMock as any)

    expect(windowMock.showErrorMessage).toHaveBeenCalledWith(
      'Could not find the namespace.'
    )
    expect(modelToBuilder.generatePropertyOutput).not.toHaveBeenCalled()
    expect(modelToBuilder.generateClass).not.toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).not.toHaveBeenCalled()
  })

  it('should stop execution if no model name is found in the active text editor', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest.fn().mockReturnValue('namespace MyProject.Models { }')
        }
      },
      showErrorMessage: jest.fn()
    }

    jest.mock('./utils/workspace-util', () => ({
      isTextEditorOpen: jest.fn().mockReturnValue(true)
    }))

    jest.mock('./utils/string-util', () => ({
      isTextInEditor: jest.fn().mockReturnValue(true)
    }))

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute(testRootLinux, windowMock as any)

    expect(windowMock.showErrorMessage).toHaveBeenCalledWith(
      'Could not find the model name.'
    )
    expect(modelToBuilder.generatePropertyOutput).not.toHaveBeenCalled()
    expect(modelToBuilder.generateClass).not.toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).not.toHaveBeenCalled()
  })

  it('should stop execution if no properties are found in the active text editor', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest
            .fn()
            .mockReturnValue(
              'namespace MyProject.Models { public class User {}}'
            )
        }
      },
      showErrorMessage: jest.fn()
    }

    jest.mock('./utils/workspace-util', () => ({
      isTextEditorOpen: jest.fn().mockReturnValue(true)
    }))

    jest.mock('./utils/string-util', () => ({
      isTextInEditor: jest.fn().mockReturnValue(true)
    }))

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute(testRootLinux, windowMock as any)

    expect(windowMock.showErrorMessage).toHaveBeenCalled()
    expect(modelToBuilder.generatePropertyOutput).not.toHaveBeenCalled()
    expect(modelToBuilder.generateClass).not.toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).not.toHaveBeenCalled()
  })

  it('should continue execution if all checks are okay', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest
            .fn()
            .mockReturnValue(
              'namespace MyProject.Models { public class User { public string FirstName { get; set; } }}'
            ),
          uri: {
            fsPath: `${testRootLinux}/Bar.cs`
          }
        }
      },
      showErrorMessage: jest.fn(),
      showInformationMessage: jest.fn()
    }

    jest.mock('./utils/workspace-util', () => ({
      isTextEditorOpen: jest.fn().mockReturnValue(true)
    }))

    jest.mock('./utils/string-util', () => ({
      isTextInEditor: jest.fn().mockReturnValue(true)
    }))

    jest.spyOn(modelToBuilder, 'generatePropertyOutput')
    jest.spyOn(modelToBuilder, 'generateClass')
    jest.spyOn(modelToBuilder, 'saveBuilderFile')

    modelToBuilder.execute(testRootLinux, windowMock as any)

    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
    expect(windowMock.showInformationMessage).toHaveBeenCalled()
    expect(modelToBuilder.generatePropertyOutput).toHaveBeenCalled()
    expect(modelToBuilder.generateClass).toHaveBeenCalled()
    expect(modelToBuilder.saveBuilderFile).toHaveBeenCalled()
  })

  it('should generate the property output text', () => {
    const propertyOutput: IPropertyOutput = new PropertyOutputBuilder()
      .withDefinitions(['private string _firstName = "";'])
      .withExternalSetters([
        `public UserBuilder WithFirstName(string value)
        {
          _firstName = value;
          return this;
        }`
      ])
      .withLocalSetters(['FirstName=_firstName'])
      .build()

    const output = modelToBuilder.generatePropertyOutput(
      'User',
      ['FirstName'],
      ['string']
    )

    expect(output.definitions[0].replace(/\s+/g, '')).toEqual(
      propertyOutput.definitions[0].replace(/\s+/g, '')
    )
    expect(output.externalSetters[0].replace(/\s+/g, '')).toEqual(
      propertyOutput.externalSetters[0].replace(/\s+/g, '')
    )
    expect(output.localSetters[0].replace(/\s+/g, '')).toEqual(
      propertyOutput.localSetters[0].replace(/\s+/g, '')
    )
  })

  it('should generate the class text', () => {
    const propertyOutput: IPropertyOutput = new PropertyOutputBuilder()
      .withDefinitions([
        'private string _firstName = "";',
        'private string _lastName = "";',
        'private int _age = 1;'
      ])
      .withExternalSetters([
        `public UserBuilder WithFirstName(string value)
        {
          _firstName = value;
          return this;
        }`,
        `public UserBuilder WithLastName(string value)
        {
          _lastName = value;
          return this;
        }`,
        `public UserBuilder WithAge(int value)
        {
          _age = value;
          return this;
        }`
      ])
      .withLocalSetters([
        'FirstName = _firstName',
        'LastName = _lastName',
        'Age = _age'
      ])
      .build()

    const classString = modelToBuilder.generateClass(
      'MyProject.Models',
      'User',
      propertyOutput
    )

    expect(classString.replace(/\s+/g, '')).toBe(
      `using System;
      
      namespace MyProject.Models
      {
        public class UserBuilder
        {
          private string _firstName = "";
          private string _lastName = "";
          private int _age = 1;
          
          public User Build() => 
            new User
            {
              FirstName = _firstName,
              LastName = _lastName,
              Age = _age
            };
          
          public UserBuilder WithFirstName(string value)
          {
            _firstName = value;
            return this;
          }

          public UserBuilder WithLastName(string value)
          {
            _lastName = value;
            return this;
          }

          public UserBuilder WithAge(int value)
          {
            _age = value;
            return this;
          }
        }
      }`.replace(/\s+/g, '')
    )
  })

  it('should save the builder file in linux os', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest
            .fn()
            .mockReturnValue('export interface ITest { foo: string }'),
          uri: {
            fsPath: `${testRootLinux}/TestModel.cs`
          }
        }
      },
      showErrorMessage: jest.fn(),
      showInformationMessage: jest.fn()
    }

    modelToBuilder.saveBuilderFile(
      windowMock as any,
      windowMock.activeTextEditor as any,
      'foo'
    )

    expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
    expect(windowMock.showInformationMessage).toHaveBeenCalled()
  })

  it('should save the builder file in windows os', () => {
    const windowMock = {
      activeTextEditor: {
        document: {
          getText: jest
            .fn()
            .mockReturnValue('export interface ITest { foo: string }'),
          uri: {
            fsPath: `${testRootWindows}\\TestModel.cs`
          }
        }
      },
      showErrorMessage: jest.fn(),
      showInformationMessage: jest.fn()
    }

    modelToBuilder.saveBuilderFile(
      windowMock as any,
      windowMock.activeTextEditor as any,
      'foo'
    )

    expect(fs.writeFileSync).toHaveBeenCalledTimes(1)
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
    expect(windowMock.showInformationMessage).toHaveBeenCalled()
  })

  it('should show error message when saving file fails', () => {
    const windowMock = {
        activeTextEditor: {
          document: {
            getText: jest
              .fn()
              .mockReturnValue('export interface ITest { foo: string }'),
            uri: {
              fsPath: `${testRootLinux}/TestModel.cs`
            }
          }
        },
        showErrorMessage: jest.fn(),
        showInformationMessage: jest.fn()
      }
      // tslint:disable-next-line: variable-name
    ;(fs.writeFileSync as any).mockImplementation(() => {
      throw new Error('Some error')
    })

    modelToBuilder.saveBuilderFile(
      windowMock as any,
      windowMock.activeTextEditor as any,
      'foo'
    )

    expect(windowMock.showErrorMessage).toHaveBeenCalled()
    expect(windowMock.showInformationMessage).not.toHaveBeenCalled()
  })
})
