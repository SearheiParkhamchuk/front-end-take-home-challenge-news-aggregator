import { type ArticleClient } from './@types';
import { type ArticleServer } from '../api/articles-infinite/@types';
import { hydrateArticle } from '../utils/hydrate-article';

export function prepareArticles(rawArticlesData: ArticleServer[]): ArticleClient[] {
  return rawArticlesData.map(hydrateArticle);
}
