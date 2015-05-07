(function (angular) {
    angular.module('app')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl(studentApi) {
        let home = this;
        studentApi.getStudents(function(data) {
            home.students = data;
        });

        home.delete = function(id) {
            if (confirm('Are you sure you want to delete this student?') === true) {
                studentApi.deleteStudent(id, function(data) {
                    studentApi.getStudents(function(data) {
                        home.students = data;
                    });
                });
            }
        };
    }
}(angular));
