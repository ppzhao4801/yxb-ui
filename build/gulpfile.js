'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('node-sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssmin = require('gulp-cssmin');

function compile() {
  return gulp.src('../src/styles/*.scss')
    .pipe(sass())
    .pipe(autoprefixer({
      browsers: ['ie > 9', 'last 2 versions'],
      cascade: false
    }))
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/styles'));
}

function copyfont() {
  return gulp.src('../src/styles/fonts/**')
    .pipe(cssmin())
    .pipe(gulp.dest('../lib/styles/fonts'));
}

exports.build = gulp.series(compile, copyfont);
