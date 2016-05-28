var browserSync = require('browser-sync');
var gulp = require('gulp');
var config = require('../config');

var browserSyncTask = function () {
  browserSync.init(config.tasks.browserSync);
}

gulp.task('browserSync', browserSyncTask);

module.exports = browserSyncTask;
