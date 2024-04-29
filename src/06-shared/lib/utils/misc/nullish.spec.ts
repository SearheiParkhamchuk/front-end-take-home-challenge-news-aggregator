import { nullish } from './nullish'

describe('nullish', () => {
  it('should return true for nullish values', () => {
    const nonNullishValues = [1, 'hello', true, {}, []]

    for (const value of nonNullishValues) {
      expect(nullish(value)).toBe(false)
    }
  })

  it('should return false for null and undefined', () => {
    expect(nullish(null)).toBe(true)
    expect(nullish(undefined)).toBe(true)
  })
})
