describe('update spec', function() {

    beforeEach(module('app'));

    var service,
        vm,
        controller,
        httpBackend;

    beforeEach(inject(function(studentApi, $rootScope, $controller, $httpBackend){
        service = studentApi;
        httpBackend = $httpBackend;
        controller = $controller;
    }));

    afterEach(function() {
        httpBackend.verifyNoOutstandingExpectation();
        httpBackend.verifyNoOutstandingRequest();
    });

    it("should make an ajax call to api/students", function () {

        httpBackend.expectGET('components/home/home.html').respond(200);
        httpBackend.whenGET("http://localhost:7000/api/student/1").respond(200, {
            id: 7, // Data returned, but not set in scope
            first: 'Chris',
            last: 'Johnson'
        });

        var vm = controller('UpdateCtrl', {studentApi: service, $routeParams: {id: 1}});

        httpBackend.flush();

        expect(vm.first).toBe('Chris');
        expect(vm.last).toBe('Johnson');
    });
});
