/**
 * Call the passed function.
 * Just for better code reading puposes.
 *
 * @param func
 * @returns
 */
export function call<T extends() => any> (func: T): ReturnType<T> {
  return func()
}
