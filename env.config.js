const env = process.env.ENV || 'development';

const configs = {
  development: {
    API: 'http://192.168.31.153:4000/api-docs',
    EMAIL_USER:'accforms2345678@gmail.com',
    EMAIL_PASS:"Mernes4esgtni"
  },
  production: {
    API: '...',
    EMAIL_USER:'accforms2345678@gmail.com',
    EMAIL_PASS:"Mernes4esgtni"
  },
}[env];



export default configs;
