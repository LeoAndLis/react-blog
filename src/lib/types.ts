export type AuthorType = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export type AddArticleType = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
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

export type ValidationErrorsType = {
  email?: string;
  'email or password'?: string[];
  password?: string;
  username?: string;
} | null;

export type UserType = {
  bio?: string;
  email: string;
  image?: string | null;
  password: string;
  token?: string;
  username: string;
};

export type UserEditType = {
  email: string;
  image?: string | null;
  password?: string;
  token?: string;
  username: string;
};

export type StateType = {
  articlesCount: number;
  articlesList: ArticleType[];
  contentLoading: boolean;
  curArticle: ArticleType;
  error: string;
  validationErrors: ValidationErrorsType;
  user: UserType;
  userIsAuthorized: boolean;
  userLoading: boolean;
};