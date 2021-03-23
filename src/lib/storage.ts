export const setUserToken = (token: string | null): void => {
  try {
    if (token) {
      localStorage.setItem('token', token);
    } else {
      localStorage.removeItem('token');
    }
  } catch (error) {
    console.log(error);
  }
};

export const getUserToken = (): string | null => localStorage.getItem('token');
