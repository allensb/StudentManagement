describe('home spec', function() {

    beforeEach(module('app'));

    var service,
        scope,
        controller,
        $httpBackend;

    beforeEach(inject(function(studentApi, $rootScope, $controller, _$httpBackend_){
        service = studentApi;
        $httpBackend = _$httpBackend_;
        scope = $rootScope.$new();
        controller = $controller;
    }));

    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("should make an ajax call to api/students", function () {
        controller("UpdateCtrl", {$scope: scope, studentApi: service, $routeParams: {id: 1}});

        $httpBackend.expectGET('app/views/home/home.html').respond(200);
        $httpBackend.whenGET("http://localhost:7000/api/student/1").respond([{
            id: 7,
            first: 'Chris',
            last: 'Johnson'
        }]);

        scope.$root.$digest();
        expect(scope.first).toBe('Chris');
    });
});