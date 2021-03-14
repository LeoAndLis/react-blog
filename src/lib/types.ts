export type AuthorType = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type ArticleType = {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: AuthorType;
};

export type ProfileType = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type UserType = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: null | string;
};

export type StateType = {
  articleLoading: boolean;
  articlesCount: number;
  articlesList: ArticleType[];
  articlesListLoading: boolean;
  curArticle: ArticleType;
  error: string;
};