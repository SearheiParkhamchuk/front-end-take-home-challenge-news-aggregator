export function isUppercase(string: string): boolean {
  if (!string.trim()) return false
  return string === string.toUpperCase()
}
