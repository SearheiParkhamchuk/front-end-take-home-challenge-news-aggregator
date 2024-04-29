export const never = (_: never | null, message: string): never => {
  throw new Error(message)
}
