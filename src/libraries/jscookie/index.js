import cookie from 'js-cookie';
import nookies, { setCookie as nookiesSetCookie } from 'nookies';

import { paths } from 'routes/index';
import { APP_BASE_NAME } from 'constants/index';

export const setCookie = (key, value) => {
  if (process.browser) {
    cookie.set(key, value, {
      expires: 1,
      path: paths.home,
    });
  }
};

export const removeCookie = (key) => {
  if (process.browser) {
    cookie.remove(key, {
      expires: 1,
    });
  }
};

export const getCookieFromBrowser = (key) => {
  return cookie.get(key);
};

const getCookieFromServer = (key, req) => {
  if (!req.headers.cookie) {
    return undefined;
  }
  const rawCookie = req.headers.cookie
    .split(';')
    .find((c) => c.trim().startsWith(`${key}=`));
  if (!rawCookie) {
    return undefined;
  }
  return rawCookie.split('=')[1];
};

export const getCookie = (key, req) => {
  return process.browser
    ? getCookieFromBrowser(key)
    : getCookieFromServer(key, req);
};

export const createCookieKey = (key) => `${APP_BASE_NAME}/${key}`;

export const getNookiesCookie = (key, ctx) => {
  try {
    const cookies = nookies.get(ctx);

    return cookies[key];
  } catch {
    return null;
  }
};

export const setNookiesCookie = (key, value) => {
  nookiesSetCookie(null, key, value, {
    path: '/',
  });
};
