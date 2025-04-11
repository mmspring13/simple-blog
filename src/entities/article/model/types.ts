export type Article = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

export type FetchArticlesParams = {
  userId?: string | string[];
};
