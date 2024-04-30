export function pickFirstSearchParameter(params: Record<string, string | string[] | undefined>, key: string) {
  const parameter = params[key]
  return Array.isArray(parameter) ? parameter[0] : parameter
}
