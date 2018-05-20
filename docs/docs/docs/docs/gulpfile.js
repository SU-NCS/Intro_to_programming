const gulp = require('gulp');
const del = require('del');
const gulpLoadPlugins = require('gulp-load-plugins');

const $ = gulpLoadPlugins();

// Publishes the site to GitHub Pages
gulp.task('publish', () => {
  console.log('Publishing to GH Pages');
  return gulp.src('./_book/**/*')
    .pipe($.ghPages({
      origin: 'origin',
      branch: 'gh-pages'
    }));
});
gulp.task('clean', function () {
  return del(['docs/**', 'docs/.*', '!docs'], {
    force: true
  });
});
gulp.task('copy', function () {
  gulp.src([
      '_book/**/*'
    ])
    .pipe(gulp.dest('docs'));
});