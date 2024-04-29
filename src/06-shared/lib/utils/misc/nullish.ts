/**
 * Check if value is null or undefined
 *
 * @param value
 * @returns
 */
export const nullish = (value: any): value is null | undefined => {
  return value === null || value === undefined
}
