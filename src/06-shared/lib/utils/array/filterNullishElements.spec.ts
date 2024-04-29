import { filterNullishElements } from './filterNullishElements' // Replace with your path

describe('filterNullishElements', () => {
  it('should return an empty array for an empty input array', () => {
    expect(filterNullishElements([])).toEqual([])
  })

  it('should remove null and undefined values from the array', () => {
    const input = [1, null, 'hello', undefined, true]
    const expected = [1, 'hello', true]

    expect(filterNullishElements(input)).toEqual(expected)
  })

  it('should not remove non-nullish values from the array', () => {
    const input = [0, false, '', NaN]
    const expected = [0, false, '', NaN] // While these are technically falsy, they are not nullish
    expect(filterNullishElements(input)).toEqual(expected)
  })

  it('should work with arrays of different types', () => {
    const input = [1, 'hello', null, undefined, { name: 'John' }]
    const expected = [1, 'hello', { name: 'John' }]

    expect(filterNullishElements(input)).toEqual(expected)
  })
})
