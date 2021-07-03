export interface Article {
  title: string;
  content: string;
  active: boolean;
  date: Date;
}

export type ArticleList = Article[];
