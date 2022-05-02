
import { mkdirSync } from 'fs';

var gulp:any = require('gulp');
const sass = require('gulp-sass')(require('sass'));
var haml = require('gulp-haml');

function buildStyles() {
  return gulp.src('./src/**/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./build'));
};

function buildHaml() {
  return gulp.src('./src/**/*.haml')
    .pipe(haml())
    .pipe(gulp.dest('./build'));
}

function copyHtml() {
  return gulp.src(['./src/**/*.html', './src/**/*.js'])
    .pipe(gulp.dest('./build'));
};

function copyRes() {
  return gulp.src(['./src/**/res/*'])
    .pipe(gulp.dest('./build'));
};

exports.watchFiles = function () {
  mkdirSync('build', {recursive: true});
  buildStyles();
  buildHaml();
  //copyHtml();
  copyRes();
  gulp.watch(['./src/**/*.scss', './src/**/*.sass'], gulp.series('buildStyles'));
  //gulp.watch(['./src/**/*.html'], gulp.series('copyHtml'));
  gulp.watch(['./src/**/*.haml'], gulp.series('buildHaml'));
};

function defaultTask(cb:any) {
  console.log('aabb');
  // place code for your default task here
  cb();
}

exports.buildStyles = buildStyles;
exports.buildHaml = buildHaml;
exports.copyHtml = copyHtml;
exports.copyRes = copyRes;
exports.default = defaultTask;
