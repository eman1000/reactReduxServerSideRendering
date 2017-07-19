const HMR = (app) => {
  const webpack  = require('webpack');
  const devWebpackConfig = require('../webpack.config.js');
  const serverConfig = require('../webpack.config.js').serverConfig;
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');

  const compiler = webpack(devWebpackConfig);
//console.log(devWebpackConfig);
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    hot: true,
    publicPath: "/static/"
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    reload: true
  }));

  return app;
}

export default HMR;
