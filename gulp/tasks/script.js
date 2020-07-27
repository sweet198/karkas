const gulp = require('gulp');
const plumber = require('gulp-plumber'); // не останавливает Gulp при ошибке
const eslint = require('gulp-eslint'); // проверяет JS
const babel = require('gulp-babel'); // конверотрует код JS
const uglify = require('gulp-uglify-es').default; //сжимает JS
const rename = require("gulp-rename");
const concat = require("gulp-concat");

module.exports = function script() {
  return gulp.src(['src/js/**/*.js', 'node_modules/jquery/dist/jquery.min.js'])
    .pipe (concat('main.js'))
    .pipe(plumber())
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(gulp.dest('build/js'))
    .pipe(
      uglify()
    )
    .pipe(
      rename({
        extname: ".min.js"
      })
    )
    .pipe(gulp.dest('build/js'))
}

