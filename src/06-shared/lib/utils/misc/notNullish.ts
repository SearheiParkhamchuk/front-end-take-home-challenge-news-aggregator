import { type NonNullable } from '@/06-shared/lib/types/NonNullable'

/**
 * Check if value is neither null nor undefined
 *
 * @param value
 * @returns
 */
export const notNullish = <T>(value: T): value is NonNullable<T> => {
  return !(value === null || value === undefined)
}
