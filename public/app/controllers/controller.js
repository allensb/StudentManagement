angular.module('app.controllers', [])

    .controller('HomeCtrl', ['$scope', 'studentApi',
        function($scope, studentApi) {
            studentApi.getStudents(function(data) {
                $scope.students = data;
            });

            $scope.delete = function(id) {
                if (confirm('Are you sure you want to delete this student?') === true) {
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
                        alert('Successfully Inserted!');
                        return;
                    }
                    alert('Insert failed! Please contact your administrator.');
                })
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
                        alert('Successfully Updated!');
                        return;
                    }
                    alert('Update failed! Please contact your administrator.');
                })
            };
        }]);
