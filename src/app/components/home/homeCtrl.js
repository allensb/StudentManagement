(function (angular) {
    angular.module('app')
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
}(angular));
