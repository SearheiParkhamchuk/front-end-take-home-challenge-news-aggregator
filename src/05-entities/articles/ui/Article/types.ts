import { type ARTICLE_ORIENTATION } from '../../constants/article-orientation';

export type ArticleProps = {
  alt: string;
  description: string;
  poster: string | null;
  publishedAt: Date;
  source: string;
  sourceName: string;
  title: string;
  orientation?: ARTICLE_ORIENTATION;
};
