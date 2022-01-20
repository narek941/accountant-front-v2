import axios from 'axios';

import { getCookieFromBrowser } from 'libraries/jscookie';

import configs from '~/env.config';

const defaultOptions = {
  baseURL: configs.API,
};

const axiosInstance = axios.create(defaultOptions);

axiosInstance.interceptors.request.use((config) => {
  const lng = getCookieFromBrowser('next-i18next');

  config.params = {
    lng,
    ...config.params,
  };

  return config;
});

export default axiosInstance;
