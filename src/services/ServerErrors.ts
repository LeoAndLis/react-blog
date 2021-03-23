export default class ServerErrors extends Error {
  errors: any = {};

  constructor(errors?: any) {
    super();
    if (errors) {
      this.errors = errors;
    }
  }
}
