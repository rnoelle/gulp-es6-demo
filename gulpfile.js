const gulp = require('gulp');
const concat = require('gulp-concat')

gulp.task('js', () => {
  gulp.src('./js/*.js')
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist'))
});
