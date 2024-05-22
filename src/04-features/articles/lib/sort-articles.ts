type Item = { published_at: Date }

export function sortArticles<D extends Item>(data: D[]) {
  return [...data].sort((a, b) => b.published_at.getTime() - a.published_at.getTime())
}
