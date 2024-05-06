export function mergeArticlesErrors<D extends { error: Error | null }>(data: D[]) {
  return data.reduce<Error[]>((acc, response) => response.error ? [...acc, response.error] : acc, [])
}
