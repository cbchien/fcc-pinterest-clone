import * as express from 'express';
import * as mongoose from 'mongoose';
import * as path from 'path';

// Typescript 2 doesn't allow assigning properties on an imported module
// mongoose.Promise = global.Promise; will not work
(<any>mongoose).Promise = Promise;

const MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/pinterest';
mongoose
  .connect(MONGO_URL, { useMongoClient: true })
  .then(() => {
    console.log(`Connected to mongoDB at ${MONGO_URL}`);
  })
  .catch((err) => {
    console.error(`Fail to connect to mongoDB at ${MONGO_URL}:\n${err}`);
    console.info('Please double check your mongoDB instance and try again');
    process.exit(1);
  });

export const app = express();

if (process.env.NODE_ENV === 'production') {
  const DIST = path.join(__dirname, '..', '..', 'dist');
  app.use(express.static(DIST));
  app.get('*', (req, res) => res.sendFile('index.html', {
    root: DIST,
  }));
} else {
  const historyApiFallback = require('connect-history-api-fallback');
  const webpack = require('webpack');
  const webpackConfig = require('../../webpack.dev');
  const compiler = webpack(webpackConfig);
  const instance = require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: webpackConfig.output.publicPath,
  });

  app.use(instance);
  app.use(require('webpack-dev-middleware')(compiler));
  app.use(historyApiFallback());
}

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(
  `${process.env.NODE_ENV} server is listening on port ${PORT}`
));