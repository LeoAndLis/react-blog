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
  bio?: string;
  email: string;
  image?: string | null;
  password: string;
  token?: string;
  username: string;
};

export type StateType = {
  articlesCount: number;
  articlesList: ArticleType[];
  contentLoading: boolean;
  curArticle: ArticleType;
  error: string;
  userLoading: boolean;
  user: UserType;
};