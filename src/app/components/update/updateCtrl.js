(function (angular) {
    angular.module('app')
        .controller('UpdateCtrl', UpdateCtrl);

        function UpdateCtrl(studentApi, $routeParams) {
            let vm = this;
            vm.id = $routeParams.id;

            studentApi.getStudent($routeParams.id, function(data) {
                vm.first = data.first;
                vm.last = data.last;
            });

            vm.update = function() {
                studentApi.updateStudent(vm.id, vm.first, vm.last, function(data) {
                    if (data === 'success') {
                        alert('Successfully Updated!');
                        return;
                    }
                    alert('Update failed! Please contact your administrator.');
                });
            };
        }
}(angular));
