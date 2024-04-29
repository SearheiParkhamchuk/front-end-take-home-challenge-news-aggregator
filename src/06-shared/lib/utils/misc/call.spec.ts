import { call } from './call'

describe('call', () => {
  it('should return the result of the function call', () => {
    const mockFunction = jest.fn(() => 42)
    const result = call(mockFunction)

    expect(result).toBe(42)
    expect(mockFunction).toHaveBeenCalled()
  })

  it('should work with functions that return different types', () => {
    const stringFunction = jest.fn(() => 'Hello, world!')
    const numberFunction = jest.fn(() => 100)
    const booleanFunction = jest.fn(() => true)

    expect(call(stringFunction)).toBe('Hello, world!')
    expect(call(numberFunction)).toBe(100)
    expect(call(booleanFunction)).toBe(true)
  })

  it('should throw an error if the function is not callable', () => {
    const notCallable = {}
    expect(() => call(notCallable as any)).toThrow()
  })
})
