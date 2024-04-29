import { nullish } from '../misc/nullish'

export const filterNullishElements = <T>(arr: T[]): Array<NonNullable<T>> => {
  return arr.filter((element): element is NonNullable<T> => !nullish(element))
}
