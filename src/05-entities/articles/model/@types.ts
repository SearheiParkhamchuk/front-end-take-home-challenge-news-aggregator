export type ArticleMedia = {
  height: string;
  url: string;
  width: string;
};

export type ArticleClient = {
  media: {
    images: ArticleMedia[];
  };
  published_at: Date;
  source_name: string;
  source_url: string;
  title: string;
  uuid: string;
  description?: string;
  id?: string;
  thumbnail?: string;
};
