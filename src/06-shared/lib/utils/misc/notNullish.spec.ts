import { notNullish } from './notNullish'

describe('notNullish', () => {
  it('should return true for non-nullish values', () => {
    const nonNullishValues = [1, 'hello', true, {}, []]

    for (const value of nonNullishValues) {
      expect(notNullish(value)).toBe(true)
    }
  })

  it('should return false for null and undefined', () => {
    expect(notNullish(null)).toBe(false)
    expect(notNullish(undefined)).toBe(false)
  })
})
