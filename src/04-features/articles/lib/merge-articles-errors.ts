export function mergeArticlesErrors<D extends { error: { message: string } | null }>(data: D[]) {
  return data.reduce<Array<{ message: string }>>((acc, response) => response.error ? [...acc, response.error] : acc, [])
}
