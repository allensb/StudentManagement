(function (angular) {
    angular.module('app')
        .controller('AddCtrl', AddCtrl);

    function AddCtrl(studentApi) {
        var vm = this;
        vm.add = function() {
            studentApi.insertStudent(vm.first, vm.last, function(data) {
                if (data === 'success') {
                    alert('Successfully Inserted!');
                    return;
                }
                alert('Insert failed! Please contact your administrator.');
            });
        };
    }
}(angular));
