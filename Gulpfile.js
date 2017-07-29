var gulp        = require('gulp');

var pug         = require('gulp-pug');

var browserify  = require('browserify');
var babelify    = require('babelify');
var source      = require('vinyl-source-stream');
var buffer      = require('vinyl-buffer');
var uglify      = require('gulp-uglify');
var sourcemaps  = require('gulp-sourcemaps');
var livereload  = require('gulp-livereload');
var globby      = require('globby');
var es          = require('event-stream');
var through      = require('through2');

gulp.task('build', function (done) {
    let bundleStream = through();

    bundleStream
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/client/js'));

    // app.js is your main JS file with all your module inclusions
    globby(['./src/client/js/app.js', './src/client/js/**.config.js', './src/client/js/**.js']).then((files) => {
        console.log(files);
        let b = browserify({entries: [files], debug: true})
                .transform("babelify", { presets: ["es2015"], sourceMaps: true })
                .bundle()
                .pipe(bundleStream);
    });
    return bundleStream;
});

gulp.task('html', function buildHTML() {
    return gulp.src('./src/client/views/*.pug')
        .pipe(pug())
        .pipe(gulp.dest('./dist/client/html'))
        .pipe(livereload());
});

gulp.task('server', function buildServer() {
    return gulp.src('./src/server/**/*.js')
        .pipe(gulp.dest('./dist/server/.'))
        .pipe(livereload());
});

gulp.task('libraryCSS', function copyLibrary() {
    return gulp.src(['./node_modules/angular-material/angular-material.min.css'])
        .pipe(gulp.dest('./dist/client/css'));
});

gulp.task('watch', ['build','html', 'libraryCSS', 'server'], function () {
    livereload.listen();
    gulp.watch('./src/client/*.js', ['build']);
    gulp.watch('./src/client/views/*.pug', ['html']);
    gulp.watch('./src/server/**/*.js', ['server']);
});

gulp.task('default', ['watch']);
