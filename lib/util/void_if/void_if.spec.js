import void_if from './void_if'

describe('void_if', () => {
  it('should return undefined if isVoid is true', () => {
    expect(void_if(true, 'some value')).toBeUndefined()
  })

  it('should return the original value if isVoid is false', () => {
    expect(void_if(false, 'some value')).toBe('some value')
  })
})
