var gulp = require('gulp');
var browserSync = require('browser-sync');
var changed = require('gulp-changed');
var path = require('path');
var config = require('../config');

var paths = {
  src: path.join(config.root.src, config.tasks.static.src, '/**/*.*'),
  dest: path.join(config.root.dest)
};

var staticTask = function () {
  return gulp.src(paths.src)
    .pipe(changed(paths.dest))
    .pipe(gulp.dest(paths.dest))
    .pipe(browserSync.stream());
}

gulp.task('static', staticTask);

module.exports = staticTask;
