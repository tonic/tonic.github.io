var browserSync = require('browser-sync');
var config = require('../config');
var gulp = require('gulp');
var path = require('path');
var webpack = require('webpack');
var webpackMutiConfig = require('../lib/webpackMultiConfig');

var browserSyncTask = function () {
  var webpackConfig = webpackMutiConfig('development');
  var compiler = webpack(webpackConfig);
  var server = config.tasks.browserSync.server;

  server.middleware = [
    require('webpack-dev-middleware')(compiler, {
      stats: 'errors-only',
      publicPath: path.join('/', webpackConfig.output.publicPath)
    }),

    require('webpack-hot-middleware')(compiler)
  ];

  browserSync.init(config.tasks.browserSync);
}

gulp.task('browserSync', browserSyncTask);

module.exports = browserSyncTask;
