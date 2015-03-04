var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var karma = require('karma').server;
var plug = require('gulp-load-plugins')();

var directories = [
    './public/app/*.js',
    './public/app/**/*.js'
];

gulp.task('ngAnnotateTest', function() {
    return gulp
        .src(directories)
        .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
        .pipe(plug.rename(function(path) {
            path.extname = '.annotated.js';
        }))
        .pipe(gulp.dest('./build'));
});

gulp.task('hint', function() {
    return gulp
        .src(directories)
        .pipe(plug.jshint('.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('compileJS', function () {
    return browserify('./public/app/plugins.js').bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/scripts'));
});

gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

gulp.task('default', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);

});