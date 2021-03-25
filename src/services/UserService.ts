import ServerRequestService from './ServerRequestService';
import { UserType, UserEditType } from '../lib/types';

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
    const header = { 'Authorization': `Token ${userToken}` };
    return this.apiRequest.getResource(this.API_USER_PATH, {}, 'GET', {}, header);
  }

  public updateUser(postParams: UserEditType): Promise<{ user: UserType }> {
    const header = { 'Authorization': `Token ${postParams.token}` };
    return this.apiRequest.getResource(this.API_USER_PATH, {}, 'PUT', { 'user': postParams }, header);
  }
}
