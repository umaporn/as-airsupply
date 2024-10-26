import cookie from 'js-cookie';

export const getAccessToken = (): string | undefined =>
  cookie.get('access_token');

export const setAccessToken = (token: string, expires: string) => {
  cookie.set('access_token', token, { expires: new Date(expires) });
};
export const removeAccessToken = () => {
  cookie.remove('access_token');
};

export const clearStorage = () => {
  removeAccessToken();
};
