switch (process.env.NODE_ENV) {
  case 'production':
  case 'pro':
    module.exports = require('./webpack.prod');
    break;

  case 'test':
    module.exports = require('./webpack.test');
    break;

  case 'development':
  case 'dev':
  default:
    module.exports = require('./webpack.dev');
}