var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var karma = require('karma').server;
var plug = require('gulp-load-plugins')();

var files = ['./src/app/app.js',
    './src/app/components/**/*.js',
    './src/app/services/*.js'
];

gulp.task('hint', function() {
    return gulp
        .src(files)
        .pipe(plug.jshint('.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('browserify', function () {
    return browserify('./src/app/plugins.js').bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minifyJS', function() {
    return gulp
        .src(files)
        .pipe(plug.babel())
        .pipe(plug.ngAnnotate())
        .pipe(plug.uglify())
        .pipe(plug.concat('app.min.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('move', function() {
    gulp.src('index.html')
        .pipe(gulp.dest('dist/'));

    gulp
        .src(['./src/app/components/**/*.html'])
        .pipe(gulp.dest('./dist/components'));

    gulp
        .src(['./src/content/css/*.css'])
        .pipe(gulp.dest('./dist/content/css'));
});
                                 
gulp.task('test', function (done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js'
    }, done);
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('./src/app/components/**/*.html', ['build', 'test']);
    gulp.watch(files, ['hint', 'build', 'test']);
});

gulp.task('build', ['browserify', 'minifyJS', 'move']);

gulp.task('default', ['hint', 'build', 'test', 'watch']);
