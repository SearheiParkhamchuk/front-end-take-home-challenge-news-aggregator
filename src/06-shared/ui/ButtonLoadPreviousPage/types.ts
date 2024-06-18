import { type ArticlesRequestParams } from 'src/05-entities/articles';

export type LoadPreviousPageProps = {
  href: string;
  hasPrevious: boolean;
  loading: boolean;
  onLoad: () => void;
};
