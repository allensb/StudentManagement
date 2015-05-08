(function (angular) {
    angular.module('app')
        .controller('HomeCtrl', HomeCtrl);

    function HomeCtrl(studentApi) {
        let vm = this;
        studentApi.getStudents(function(data) {
            vm.students = data;
        });

        vm.delete = function(id) {
            if (confirm('Are you sure you want to delete this student?') === true) {
                studentApi.deleteStudent(id, function(data) {
                    studentApi.getStudents(function(data) {
                        vm.students = data;
                    });
                });
            }
        };
    }
}(angular));
