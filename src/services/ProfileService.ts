import ServerRequestService from './ServerRequestService';

type ProfileType = {
  username: string;
  bio: string;
  image: string;
  following: boolean;
};

export default class ProfileService {
  apiRequest = new ServerRequestService();

  protected readonly API_GET_PROFILE_PATH = '/profiles/{username}';
  
  protected readonly API_FOLLOW_PROFILE_PATH = '/profiles/{username}/follow';

  public getProfile(username: string): Promise<ProfileType> {
    const path = this.API_GET_PROFILE_PATH.replace('{username}', username);
    return this.apiRequest.getResource(path);
  }

  public followProfile(username: string): Promise<ProfileType> {
    const path = this.API_FOLLOW_PROFILE_PATH.replace('{username}', username);
    return this.apiRequest.getResource(path, {}, 'POST');
  }

  public unfollowProfile(username: string): Promise<ProfileType> {
    const path = this.API_FOLLOW_PROFILE_PATH.replace('{username}', username);
    return this.apiRequest.getResource(path, {}, 'DELETE');
  }
}
