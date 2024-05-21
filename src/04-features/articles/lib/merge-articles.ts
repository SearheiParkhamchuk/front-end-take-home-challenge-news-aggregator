type Item = { publishedAt: number | string }

export function mergeArticles<D extends Item>(data: Array<{ data: { data: D[] } | null }>) {
  return data.reduce<D[]>((acc, item) => {
    const articles = item.data?.data
    return articles ? [...acc, ...articles] : acc
  }, [])
}
