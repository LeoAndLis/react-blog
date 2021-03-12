import ServerRequestService from './ServerRequestService';

export type AuthorType = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

type ArticleType = {
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

type ArticleParamsType = {
  title: string;
  description: string;
  body: string;
  tagList?: string[];
};

export default class ArticlesService {
  apiRequest = new ServerRequestService();

  protected readonly API_ARTICLE_PATH = '/articles/{slug}';

  protected readonly API_ARTICLE_FAVORITE_PATH = '/articles/{slug}/favorite';

  protected readonly API_ARTICLES_FEED_PATH = '/articles/feed';
  
  protected readonly API_ARTICLES_LIST_PATH = '/articles';

  protected readonly API_UPDATE_ARTICLE_PATH = '/articles/{slug}';
  
  public addArticle(postParams: ArticleParamsType): Promise<ArticleType> {
    return this.apiRequest.getResource(this.API_ARTICLES_LIST_PATH, {}, 'POST', postParams);
  }

  public getArticle(articleSlug: string): Promise<{ article: ArticleType }> {
    const path = this.API_ARTICLE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path);
  }

  public getArticles(): Promise<ArticleType[]> {
    return this.apiRequest.getResource(this.API_ARTICLES_LIST_PATH);
  }

  public getFeedArticles(): Promise<ArticleType[]> {
    return this.apiRequest.getResource(this.API_ARTICLES_LIST_PATH);
  }

  public updateArticle(articleSlug: string, postParams: ArticleParamsType): Promise<ArticleType> {
    const path = this.API_UPDATE_ARTICLE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'PUT', postParams);
  }

  public deleteArticle(articleSlug: string): Promise<any> {
    const path = this.API_UPDATE_ARTICLE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'DELETE');
  }

  public favoriteArticle(articleSlug: string): Promise<ArticleType> {
    const path = this.API_ARTICLE_FAVORITE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'POST');
  }

  public unfavoriteArticle(articleSlug: string): Promise<ArticleType> {
    const path = this.API_ARTICLE_FAVORITE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'DELETE');
  }
}
