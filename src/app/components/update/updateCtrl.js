(function (angular) {
    angular.module('app')
    
        .controller('UpdateCtrl', ['$scope', 'studentApi',  '$routeParams',
            function($scope, studentApi, $routeParams) {
                $scope.id = $routeParams.id;

                studentApi.getStudent($routeParams.id, function(data) {
                    $scope.first = data.first;
                    $scope.last = data.last;
                });

                $scope.update = function() {
                    studentApi.updateStudent($scope.id, $scope.first, $scope.last, function(data) {
                        if (data === 'success') {
                            window.alert('Successfully Updated!');
                            return;
                        }
                        window.alert('Update failed! Please contact your administrator.');
                    });
                };
            }]);
}(angular));
