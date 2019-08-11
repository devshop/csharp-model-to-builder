import {
  getWorkspaceFolder,
  isTextEditorOpen,
  isTextInEditor,
  isWorkspaceLoaded
} from './workspace-util'

describe('Workspace Util', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should return empty string if workspace folders are empty', () => {
    const wsRoot = getWorkspaceFolder(undefined)
    expect(wsRoot).toBe('')
  })

  it('should return workspace root path', () => {
    const folders: any[] = [{ uri: { fsPath: 'path/to/unit/test/' } }]
    const wsRoot = getWorkspaceFolder(folders)
    expect(wsRoot).toBe('path/to/unit/test/')
  })

  it('should return false if a workspace is not loaded and show an error message', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const loaded = isWorkspaceLoaded('', windowMock as any)
    expect(loaded).toBe(false)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })

  it('should return true if a workspace is loaded and not show an error message', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const loaded = isWorkspaceLoaded('foo', windowMock as any)
    expect(loaded).toBe(true)
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return false if a text editor is not open and show an error message', () => {
    const windowMock = {
      activeTextEditor: false,
      showErrorMessage: jest.fn()
    }
    const open = isTextEditorOpen(windowMock as any)
    expect(open).toBe(false)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })

  it('should return true if a text editor is open and not show an error message', () => {
    const windowMock = {
      activeTextEditor: true,
      showErrorMessage: jest.fn()
    }
    const open = isTextEditorOpen(windowMock as any)
    expect(open).toBe(true)
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })

  it('should return false if text is not in editor and show an error message', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const textInEditor = isTextInEditor('', windowMock as any)
    expect(textInEditor).toBe(false)
    expect(windowMock.showErrorMessage).toHaveBeenCalled()
  })

  it('should return true if text is in editor and not show an error message', () => {
    const windowMock = {
      showErrorMessage: jest.fn()
    }
    const textInEditor = isTextInEditor('foo', windowMock as any)
    expect(textInEditor).toBe(true)
    expect(windowMock.showErrorMessage).not.toHaveBeenCalled()
  })
})
