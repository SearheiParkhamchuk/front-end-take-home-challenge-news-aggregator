import { type ArticleServer } from '../api/articles-infinite/@types';
import { type ArticleClient } from '../model/@types';

export function hydrateArticle(serializedArticle: ArticleServer): ArticleClient {
  return {
    ...serializedArticle,
    published_at: new Date(serializedArticle.published_at),
  };
}
