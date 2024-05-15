export enum ARTICLES_ORDER_BY {
  RELEVANCE = 'relevance',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}

export const items = [
  {
    label: 'Relevance',
    value: ARTICLES_ORDER_BY.RELEVANCE
  },
  {
    label: 'Newest',
    value: ARTICLES_ORDER_BY.NEWEST
  },
  {
    label: 'Oldest',
    value: ARTICLES_ORDER_BY.OLDEST
  }
]
