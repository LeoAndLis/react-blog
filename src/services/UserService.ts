import ServerRequestService from './ServerRequestService';
import { UserType } from '../lib/types';

export default class AuthService {
  apiRequest = new ServerRequestService();

  protected readonly API_AUTHENTICATION_PATH = '/users/login';

  protected readonly API_REGISTRATION_PATH = '/users';
  
  protected readonly API_USER_PATH = '/user';

  public authentication(postParams: UserType): Promise<UserType> {
    return this.apiRequest.getResource(this.API_AUTHENTICATION_PATH, {}, 'POST', postParams);
  }

  public registration(postParams: UserType): Promise<UserType> {
    return this.apiRequest.getResource(this.API_REGISTRATION_PATH, {}, 'POST', postParams);
  }

  public getCurrentUser(): Promise<UserType> {
    return this.apiRequest.getResource(this.API_USER_PATH);
  }

  public udpateUser(postParams: UserType): Promise<UserType> {
    return this.apiRequest.getResource(this.API_USER_PATH, {}, 'PUT', postParams);
  }
}
