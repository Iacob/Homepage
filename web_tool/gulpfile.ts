
import {mkdirSync} from 'fs';

var gulp:any = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function buildStyles() {
  return gulp.src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
};

function copyHtml() {
  return gulp.src(['./src/**/*.html', './src/**/*.js'])
    .pipe(gulp.dest('./build'));
};

exports.watchFiles = function () {
  mkdirSync('build', {recursive: true});
  gulp.watch(['./src/**/*.scss', './src/**/*.sass'], gulp.series('buildStyles'));
  gulp.watch(['./src/**/*.html'], gulp.series('copyHtml'));
};

function defaultTask(cb:any) {
  console.log('aabb');
  // place code for your default task here
  cb();
}

exports.buildStyles = buildStyles;
exports.copyHtml = copyHtml;
exports.default = defaultTask;
