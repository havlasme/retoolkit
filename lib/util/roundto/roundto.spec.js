import roundto from './roundto'

describe('roundto', () => {
  it('should round down to the nearest multiple (odd)', () => {
    expect(roundto(5, 0)).toBe(0)
    expect(roundto(5, 1)).toBe(0)
    expect(roundto(5, 2)).toBe(0)
    expect(roundto(5, 5)).toBe(5)
    expect(roundto(5, 6)).toBe(5)
    expect(roundto(5, 7)).toBe(5)
    expect(roundto(5, 10)).toBe(10)
    expect(roundto(5, 11)).toBe(10)
    expect(roundto(5, 12)).toBe(10)
  })

  it('should round up to the nearest multiple (odd)', () => {
    expect(roundto(5, 3)).toBe(5)
    expect(roundto(5, 4)).toBe(5)
    expect(roundto(5, 8)).toBe(10)
    expect(roundto(5, 9)).toBe(10)
    expect(roundto(5, 13)).toBe(15)
    expect(roundto(5, 14)).toBe(15)
  })

  it('should round down to the nearest multiple (even)', () => {
    expect(roundto(6, 0)).toBe(0)
    expect(roundto(6, 1)).toBe(0)
    expect(roundto(6, 2)).toBe(0)
    expect(roundto(6, 6)).toBe(6)
    expect(roundto(6, 7)).toBe(6)
    expect(roundto(6, 8)).toBe(6)
    expect(roundto(6, 12)).toBe(12)
    expect(roundto(6, 13)).toBe(12)
    expect(roundto(6, 14)).toBe(12)
  })

  it('should round up to the nearest multiple (even)', () => {
    expect(roundto(6, 3)).toBe(6)
    expect(roundto(6, 4)).toBe(6)
    expect(roundto(6, 5)).toBe(6)
    expect(roundto(6, 9)).toBe(12)
    expect(roundto(6, 10)).toBe(12)
    expect(roundto(6, 11)).toBe(12)
    expect(roundto(6, 15)).toBe(18)
    expect(roundto(6, 16)).toBe(18)
    expect(roundto(6, 17)).toBe(18)
  })
})
