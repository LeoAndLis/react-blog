export default class ServerRequestService {

  protected readonly API_PATH = 'https://conduit.productionready.io/api';

  protected makeQueryString(params: Object) {
    const esc = encodeURIComponent;

    return (
      Object.keys(params)
        // @ts-ignore
        .map((key: string) => `${esc(key)}=${esc(params[key])}`)
        .join('&')
    );
  }

  public async getResource(path: string, getParams: Object = {}, method: string = 'GET', postParams: Object = {}) {
    const queryString = this.makeQueryString({
      ...getParams,
    });
    const url = `${this.API_PATH}${path}?${queryString}`;
    const params: any = { method };

    if (method === 'POST') {
      params.body = JSON.stringify(postParams);
      params.headers = { 'Content-Type': 'application/json;charset=utf-8' };
    }

    const response = await fetch(url, params);

    if (!response.ok) {
      throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }

    return response.json();
  }
}
