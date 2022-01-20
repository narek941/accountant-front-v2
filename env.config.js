const env = process.env.ENV || 'development';

const configs = {
  development: {
    API: 'https://api.kristobad.com/api',
  },
  production: {
    API: 'https://api.kristobad.com/api',
  },
}[env];

export default configs;
