import { isLowercase } from './isLowercase' // Replace with your path

describe('isLowercase', () => {
  it('should return true for a string containing only lowercase letters', () => {
    const lowercaseString = 'hello world'
    expect(isLowercase(lowercaseString)).toBe(true)
  })

  it('should return false for a string containing uppercase letters', () => {
    const uppercaseString = 'Hello World'
    expect(isLowercase(uppercaseString)).toBe(false)
  })

  it('should return false for an empty string', () => {
    expect(isLowercase('')).toBe(false)
  })

  it('should return false for a string with mixed case and special characters', () => {
    const mixedString = 'hElLo!123'
    expect(isLowercase(mixedString)).toBe(false)
  })
})
