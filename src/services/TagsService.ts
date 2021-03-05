import ServerRequestService from './ServerRequestService';

export default class AuthService {
  apiRequest = new ServerRequestService();

  protected readonly API_TAGS_PATH = '/tags';

  public getTags(): Promise<string[]> {
    return this.apiRequest.getResource(this.API_TAGS_PATH);
  }
}