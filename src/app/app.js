(function () {
    'use strict';

    var app = angular.module('app', [
        'ngRoute',          // routing
        'ngSanitize',       // sanitizes html bindings (ex: sidebar.js)
        'ui.bootstrap'      // ui-bootstrap (ex: carousel, pagination, dialog)
    ]);

    app.config(['$routeProvider', function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'components/home/home.html',
                controller: 'HomeCtrl',
                controllerAs: 'home'
            }).
            when('/update/:id', {
                templateUrl: 'components/update/update.html',
                controller: 'UpdateCtrl'
            }).
            when('/add', {
                templateUrl: 'components/add/add.html',
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
