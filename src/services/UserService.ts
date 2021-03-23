import ServerRequestService from './ServerRequestService';
import { UserType } from '../lib/types';

export default class AuthService {
  apiRequest = new ServerRequestService();

  protected readonly API_AUTHENTICATION_PATH = '/users/login';

  protected readonly API_REGISTRATION_PATH = '/users';
  
  protected readonly API_USER_PATH = '/user';

  public authentication(postParams: UserType): Promise<{ user: UserType }> {
    return this.apiRequest.getResource(this.API_AUTHENTICATION_PATH, {}, 'POST', { 'user': postParams });
  }

  public registration(postParams: UserType): Promise<{ user: UserType }> {
    return this.apiRequest.getResource(this.API_REGISTRATION_PATH, {}, 'POST', { 'user': postParams });
  }

  public getCurrentUser(userToken: string): Promise<{ user: UserType }> {
    const header = { 'Authentication': `Token ${userToken}` };
    return this.apiRequest.getResource(this.API_USER_PATH, {}, 'GET', {}, header);
  }

  public udpateUser(postParams: UserType): Promise<{ user: UserType }> {
    return this.apiRequest.getResource(this.API_USER_PATH, {}, 'PUT', postParams);
  }
}
