(function () {
    'use strict';

    var app = angular.module('app', [
        'app.controllers',
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
        'ui.bootstrap',      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'app/views/home/home.html',
                controller: 'HomeCtrl'
            }).
            when('/update/:id', {
                templateUrl: 'app/views/home/update.html',
                controller: 'UpdateCtrl'
            }).
            when('/add', {
                templateUrl: 'app/views/home/add.html',
                controller: 'AddCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);

    // Handle routing errors and success events
    app.run(['$route',  function ($route) {
        // Include $route to kick start the router.
    }]);
})();