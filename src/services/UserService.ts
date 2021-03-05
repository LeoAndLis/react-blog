import ServerRequestService from './ServerRequestService';

type UserType = {
  email: string;
  token: string;
  username: string;
  bio: string;
  image: null | string;
};

type AuthParamsType = {
  email: string;
  username?: string;
  password: string;
  image?: string;
};

export default class AuthService {
  apiRequest = new ServerRequestService();

  protected readonly API_AUTHENTIFICATION_PATH = '/users/login';
  protected readonly API_REGISTRATION_PATH = '/users';
  protected readonly API_USER_PATH = '/user';

  public authentification(postParams: AuthParamsType): Promise<UserType> {
    return this.apiRequest.getResource(this.API_AUTHENTIFICATION_PATH, {}, 'POST', postParams);
  }

  public registration(postParams: AuthParamsType): Promise<UserType> {
    return this.apiRequest.getResource(this.API_REGISTRATION_PATH, {}, 'POST', postParams);
  }

  public getCurrentUser(): Promise<UserType> {
    return this.apiRequest.getResource(this.API_USER_PATH);
  }

  public udpateUser(postParams: AuthParamsType): Promise<UserType> {
    return this.apiRequest.getResource(this.API_USER_PATH, {}, 'PUT', postParams);
  }
}
