var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var karma = require('karma').server;
var plug = require('gulp-load-plugins')();

var files = ['./src/app/app.js',
    './src/app/components/**/*.js',
    './src/app/services/*.js'
];

gulp.task('ngAnnotateTest', function() {
    return gulp
        .src(files)
        .pipe(plug.ngAnnotate({add: true, single_quotes: true}))
        .pipe(plug.rename(function(path) {
            path.extname = '.annotated.js';
        }))
        .pipe(gulp.dest('./dist'));
});

gulp.task('hint', function() {
    return gulp
        .src(files)
        .pipe(plug.jshint('.jshintrc'))
        .pipe(plug.jshint.reporter('jshint-stylish'));
});

gulp.task('compileJS', function () {
    return browserify('./src/app/plugins.js').bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('minifyJS', function() {
    return gulp
        .src(files)
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

gulp.task('default', function(done) {
    karma.start({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done);

});
