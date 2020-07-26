const gulp = require('gulp');
const ttf2woff = require('gulp-ttf2woff'); // преобразует TTF в WOFF
const ttf2woff2 = require('gulp-ttf2woff2'); // преобразует TTF в WOFF2

module.exports = function fonts(params) {
  gulp.src('src/fonts/*')
    .pipe(ttf2woff())
    .pipe(gulp.dest('build/fonts'))
  return gulp.src('src/fonts/*')
    .pipe(ttf2woff2())
    .pipe(gulp.dest('build/fonts'))
};

