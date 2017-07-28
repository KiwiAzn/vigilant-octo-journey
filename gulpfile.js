var gulp = require('gulp');
var webpack  = require('webpack-stream');
var pug = require('gulp-pug');
var less = require('gulp-less');
var minifyCSS = require('gulp-csso');

gulp.task('html', function(){
    return gulp.src('client/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('dist/client/html'));
});

gulp.task('css', function(){
    return gulp.src('client/*.less')
        .pipe(less())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/client/css'));
});

gulp.task('js', function(){
    return gulp.src('client/*.js')
        .pipe(webpack())
        .pipe(gulp.dest('dist/client/js'));
});


gulp.task('default', [ 'html', 'css' , 'js' ]);
