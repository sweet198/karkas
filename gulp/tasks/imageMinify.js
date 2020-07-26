const gulp = require('gulp');
const imagemin = require('gulp-imagemin'); // сжимает IMG
const webp = require('gulp-webp'); // преобразует IMG в WEBP

module.exports = function imageMinify() {
  return gulp.src('src/img/*.{gif,png,jpg,svg,webp}')
    .pipe(
      webp({
        quality: 70
      })
    )
    .pipe(gulp.dest('build/img'))
    .pipe(gulp.src('src/img/*.{gif,png,jpg,svg,webp}'))
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: true }),
      imagemin.mozjpeg({
        quality: 75,
        progressive: true
      }),
      imagemin.optipng({ optimizationLevel: 5 }),
      imagemin.svgo({
        plugins: [
          { removeViewBox: true },
          { cleanupIDs: false }
        ]
      })
    ]))
    .pipe(gulp.dest('build/img'))
}

