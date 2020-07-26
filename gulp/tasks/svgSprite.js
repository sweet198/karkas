const gulp = require('gulp');
const svgsprite = require("gulp-svg-sprite");

module.exports = function svgSprite() {
  return gulp.src('src/img/sprite/*.svg')
    .pipe(svgsprite({
      mode: {
        stack: {
          sprite: "../sprite/icons.svg",
          example: true
        }
      },
    }
    ))
    .pipe(gulp.dest('build/img'))
}

