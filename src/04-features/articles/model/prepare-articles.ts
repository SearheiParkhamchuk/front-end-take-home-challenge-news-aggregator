import { type Article, type ArticleServer } from 'src/04-features/articles/model/@types';
import { hydrateArticle } from 'src/04-features/articles/model/hydrate-article';

export function prepareArticles(rawArticlesData: ArticleServer[]): Article[] {
  return rawArticlesData.map(hydrateArticle);
}
