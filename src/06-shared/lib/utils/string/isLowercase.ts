export function isLowercase(string: string): boolean {
  if (!string.trim()) return false
  return string === string.toLowerCase()
}
