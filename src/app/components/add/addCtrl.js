(function (angular) {
    angular.module('app')
    
        .controller('AddCtrl', ['$scope', 'studentApi',
            function($scope, studentApi) {
                $scope.add = function() {
                    studentApi.insertStudent($scope.first, $scope.last, function(data) {
                        if (data === 'success') {
                            window.alert('Successfully Inserted!');
                            return;
                        }
                        window.alert('Insert failed! Please contact your administrator.');
                    });
                };
            }]);
}(angular));
