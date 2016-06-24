var config = require('../lib/webpackMultiConfig')('production');
var gulp = require('gulp');
var webpack = require('webpack');

var webpackProductionTask = function (callback) {
  webpack(config, function (err, stats) {
    callback();
  });
}

gulp.task('webpack:production', webpackProductionTask);

module.exports = webpackProductionTask;
