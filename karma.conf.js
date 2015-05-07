module.exports = function(config) {
    config.set({
        basePath: './',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-bootstrap/dist/ui-bootstrap.js',
            'dist/app.min.js',
            'specs/**/*.js'
        ],

        exclude: [
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['PhantomJS'],

        plugins: [
            'karma-jasmine',
            'karma-junit-reporter',
            'karma-chrome-launcher',
            'karma-phantomjs-launcher'
        ],

        preprocessors: {
            files: ['browserify']                     
        },

        browserify: {
            debug: true,
            transform: [ 'babelify' ]
        },

        junitReporter: {
            outputFile: 'unit.xml',
            suite: 'unit'
        }
    })
}
