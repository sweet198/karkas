const gulp = require('gulp')
const plumber = require('gulp-plumber') // не останавливает Gulp при ошибке
const htmlValidator = require('gulp-w3c-html-validator') //показывает ошибки в HTML
const config = require('../config')

module.exports = function html() {
  return gulp.src('src/pages/*.html')
    .pipe(plumber())
    .pipe(htmlValidator())
    .pipe(gulp.dest('build'))
}

