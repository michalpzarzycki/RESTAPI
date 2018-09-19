(function(){
    var app = angular.module('mainApp', []);
    app.controller('MainController', ['$scope', '$http', function($scope, $http){
    $scope.search = function(name) {
          $http.get('https://jsonplaceholder.typicode.com/' + name).then(onUserComplete, onError);
        };
        
        var onUserComplete = function(response) {
            $scope.apis = response.data;
        };
        
        var onError = function(reason) {
            $scope.error = "ooops, there is an error";
        };}])
})();
