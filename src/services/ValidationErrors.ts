export default class ValidationErrors extends Error {
  errors: any = {};

  constructor(errors?: any) {
    super();
    if (errors) {
      this.errors = errors;
    }
  }
}
