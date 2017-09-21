//logic for production and development

if (process.env.NODE_ENV === 'production') {
  require('dotenv').config();
  require('./dist/server.bundle');
} else {
  require('dotenv').config();
  require('ts-node/register');
  require('./src/server/app');
}
