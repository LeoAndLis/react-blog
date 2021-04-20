import ServerRequestService from './ServerRequestService';
import { AddArticleType, ArticleType } from '../lib/types';

export default class ArticlesService {
  apiRequest = new ServerRequestService();

  protected readonly API_ARTICLE_PATH = '/articles/{slug}';

  protected readonly API_ARTICLE_FAVORITE_PATH = '/articles/{slug}/favorite';

  protected readonly API_ARTICLES_FEED_PATH = '/articles/feed';
  
  protected readonly API_ARTICLES_LIST_PATH = '/articles';

  protected readonly API_UPDATE_ARTICLE_PATH = '/articles/{slug}';
  
  public addArticle(postParams: AddArticleType, userToken?: string): Promise<{ article: ArticleType }> {
    const curToken = userToken || '';
    const header = { 'Authorization': `Token ${curToken}` };
    return this.apiRequest.getResource(this.API_ARTICLES_LIST_PATH, {}, 'POST', { article: postParams }, header);
  }

  public getArticle(articleSlug: string): Promise<{ article: ArticleType }> {
    const path = this.API_ARTICLE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path);
  }

  public getArticles(offset: number, userToken?: string): Promise<{ articles: ArticleType[], articlesCount: number }> {
    let header = {};
    if (userToken) {
      header = { 'Authorization': `Token ${userToken}` };
    }
    console.log(header);
    return this.apiRequest.getResource(this.API_ARTICLES_LIST_PATH, { offset }, 'GET', header);
  }

  public getFeedArticles(): Promise<ArticleType[]> {
    return this.apiRequest.getResource(this.API_ARTICLES_LIST_PATH);
  }

  public updateArticle(articleSlug: string, postParams: AddArticleType, userToken?: string): Promise<ArticleType> {
    const curToken = userToken || '';
    const header = { 'Authorization': `Token ${curToken}` };
    const path = this.API_UPDATE_ARTICLE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'PUT', { article: postParams }, header);
  }

  public deleteArticle(articleSlug: string, userToken?: string): Promise<any> {
    const header = { 'Authorization': `Token ${userToken}` };
    const path = this.API_UPDATE_ARTICLE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'DELETE', null, header);
  }

  public favoriteArticle(articleSlug: string, userToken?: string): Promise<ArticleType> {
    const header = { 'Authorization': `Token ${userToken}` };
    const path = this.API_ARTICLE_FAVORITE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'POST', null, header);
  }

  public unFavoriteArticle(articleSlug: string, userToken?: string): Promise<ArticleType> {
    const header = { 'Authorization': `Token ${userToken}` };
    const path = this.API_ARTICLE_FAVORITE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'DELETE', null, header);
  }

  public unfavoriteArticle(articleSlug: string): Promise<ArticleType> {
    const path = this.API_ARTICLE_FAVORITE_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'DELETE');
  }
}
