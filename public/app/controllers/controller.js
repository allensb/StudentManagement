angular.module('app.controllers', [])

    .controller('HomeCtrl', ['$scope', 'studentApi',
        function($scope, studentApi) {
            studentApi.getStudents(function(data) {
                $scope.students = data;
            });

            $scope.delete = function(id) {
                if (window.confirm('Are you sure you want to delete this student?') === true) {
                    studentApi.deleteStudent(id, function(data) {
                        studentApi.getStudents(function(data) {
                            $scope.students = data;
                        });
                    });
                }
            };
        }])
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
        }])
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
