var gulp = require('gulp');
var babel = require('gulp-babel');

gulp.task("default", function () {
  gulp.src('src/components/*.jsx')
    .pipe(babel())
    .pipe(gulp.dest('public/js/components'));
});