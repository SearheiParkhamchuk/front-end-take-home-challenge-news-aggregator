import { containsNumber } from './containsNumber' // Replace with your path

describe('containsNumber', () => {
  it('should return true for a string containing at least one number', () => {
    const testStrings = ['123', 'abc123', '456def789', 'Hello123']
    for (const testString of testStrings) {
      expect(containsNumber(testString)).toBe(true)
    }
  })

  it('should return false for a string containing no numbers', () => {
    const testStrings = ['abc', 'Hello World', 'xyz', 'no numbers']
    for (const testString of testStrings) {
      expect(containsNumber(testString)).toBe(false)
    }
  })

  it('should handle empty strings', () => {
    expect(containsNumber('')).toBe(false)
    expect(containsNumber(' ')).toBe(false)
  })
})
