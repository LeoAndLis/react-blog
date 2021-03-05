import ArticlesService, { AuthorType } from './ArticlesService';

type CommentType = {
  id: number;
  createdAt: string;
  updatedAt: string;
  body: string;
  author: AuthorType;
};

export default class CommentsService extends ArticlesService {
    protected readonly API_ADD_COMMENT_PATH = '/articles/{slug}/comments';
    protected readonly API_DELETE_COMMENT_PATH = '/article/{slug}/comments/{id}';

  public addComment(articleSlug: string, body: string): Promise<CommentType> {
    const path = this.API_ARTICLES_LIST_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path, {}, 'POST', {body});
  }

  public deleteComment(articleSlug: string, commentId: number): Promise<CommentType> {
    const path = this.API_DELETE_COMMENT_PATH.replace('{slug}', articleSlug).replace('{id}', commentId.toString());
    return this.apiRequest.getResource(path, {}, 'DELETE');
  }

  public getComments(articleSlug: string): Promise<CommentType[]> {
    const path = this.API_ARTICLES_LIST_PATH.replace('{slug}', articleSlug);
    return this.apiRequest.getResource(path);
  }
}
