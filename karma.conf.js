module.exports = function(config) {
    config.set({
        basePath: './',

        files: [
            'node_modules/angular/angular.js',
            'node_modules/angular-route/angular-route.js',
            'node_modules/angular-sanitize/angular-sanitize.js',
            'node_modules/angular-mocks/angular-mocks.js',
            'node_modules/angular-bootstrap/dist/ui-bootstrap.js',
            'public/app/app.js',
            'public/app/controllers/*.js',
            'public/app/services/*.js',
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

        junitReporter: {
            outputFile: 'unit.xml',
            suite: 'unit'
        }

    })
}