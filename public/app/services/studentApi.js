(function() {
    'use strict';

    angular.module('app').factory('studentApi', ['$http', studentApi]);

    function studentApi($http) {
        function getStudents(callback) {
            $http.get('http://localhost:7000/api/students')
                .success(function(data) {
                    callback(data);
                });
        }

        function getStudent(id, callback) {
            $http.get('http://localhost:7000/api/student/' + id)
                .success(function(data) {
                    callback(data);
                });
        }

        function insertStudent(first, last, callback) {
            $http({
                url: 'http://localhost:7000/api/student/insert/',
                method: 'POST',
                data: { 'first' : first, 'last' : last }
            })
                .then(function(response) {
                    callback(response.data);
                });
        }

        function updateStudent(id, first, last, callback) {
            $http({
                url: 'http://localhost:7000/api/student/update/',
                method: 'POST',
                data: { 'id' : id, 'first' : first, 'last' : last }
            })
                .then(function(response) {
                    callback(response.data);
                });
        }

        function deleteStudent(id, callback) {
            $http.post('http://localhost:7000/api/student/delete/' + id)
                .success(function(data) {
                    callback(data);
                });
        }

        return {
            getStudents: getStudents,
            getStudent: getStudent,
            insertStudent: insertStudent,
            updateStudent: updateStudent,
            deleteStudent: deleteStudent
        };
    }
})();