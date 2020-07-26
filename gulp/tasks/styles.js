const gulp = require('gulp');
const plumber = require('gulp-plumber'); // не останавливает Gulp при ошибке
const sass = require('gulp-sass'); // для работы на препроцессоре SASS
const cleanCSS = require('gulp-clean-css'); // минимизирует стили
const shorthand = require('gulp-shorthand'); // удаляет не нужные стили
const autoprefixer = require('gulp-autoprefixer'); // добавляет префиксы для работы CSS на разных браузерах
const gulpStylelint = require('gulp-stylelint'); //проверка стилей CSS
const rename = require("gulp-rename"); // переименовывает файлы

module.exports = function styles() {
  return gulp.src('src/scss/*.scss')
    .pipe(plumber())
    .pipe(gulpStylelint({
      failAfterError: false,
      reporters: [
        {
          formatter: 'string',
          console: true
        }
      ]
    }))
    .pipe(sass())
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(shorthand())
    .pipe(gulp.dest('build/css'))
    .pipe(cleanCSS({
      debug: true,
      compatibility: '*'
    }, details => {
      console.log(`${details.name}: Original size:${details.stats.originalSize} - Minified size: ${details.stats.minifiedSize}`)
    }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest('build/css'))
}

