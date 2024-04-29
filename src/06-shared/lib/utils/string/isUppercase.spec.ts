import { isUppercase } from './isUppercase'

describe('isUppercase', () => {
  it('should return true for a string containing only uppercase letters', () => {
    const uppercaseString = 'HELLO'
    expect(isUppercase(uppercaseString)).toBe(true)
  })

  it('should return false for a string containing lowercase letters', () => {
    const lowercaseString = 'hello'
    expect(isUppercase(lowercaseString)).toBe(false)
  })

  it('should return false for a string containing mixed case letters', () => {
    const mixedCaseString = 'HeLlO'
    expect(isUppercase(mixedCaseString)).toBe(false)
  })

  it('should return false for an empty string', () => {
    const emptyString = ''
    expect(isUppercase(emptyString)).toBe(false)
  })
})
