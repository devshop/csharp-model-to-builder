import { lowercaseFirstLetter } from './string-util'

describe('String Util', () => {
  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should lowercase the first letter of a word', () => {
    const word = lowercaseFirstLetter('FooBar')
    expect(word).toBe('fooBar')
  })
})
