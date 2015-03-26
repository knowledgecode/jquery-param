'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var closure = require('gulp-closure-compiler-service');

gulp.task('compile', function () {
    return gulp.src('src/jquery-param.js')
        .pipe(closure({
            compilation_level: 'SIMPLE_OPTIMIZATIONS',
            language: 'ECMASCRIPT5_STRICT'
        }))
        .pipe(rename('jquery-param.min.js'))
        .pipe(gulp.dest('src'));
});
