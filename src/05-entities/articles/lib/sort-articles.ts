type Item = { publishedAt: Date }

export function sortArticles<D extends Item>(data: D[]) {
  return [...data].sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime())
}
