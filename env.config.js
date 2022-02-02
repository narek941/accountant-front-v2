const env = process.env.ENV || 'development';

const configs = {
  development: {
    API: 'http://192.168.31.153:4000/api',
  },
  production: {
    API: '...',
  },
}[env];

export default configs;
