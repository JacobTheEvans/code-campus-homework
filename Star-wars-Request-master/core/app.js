var app = angular.module("reqApp",[]);

app.service("starRequests", function($http) {
  //Callback function needed. Request is async
  this.getFilm = function(onSuccess, onError) {
    $http.get("http://swapi.co/api/films/1/")
    .success(function(data) {
      onSuccess(data);
    })
    .error(function(data) {
      onError(data);
    });
  };
});

app.controller("mainController",['$scope', 'starRequests', function($scope, starRequests) {
  $scope.info = {};
  $scope.loadInfo = function(data) {
    $scope.info = data;
    console.log(data);
  };
  $scope.loadError = function(data) {
    console.log("Error, Data: " + data);
  };
  starRequests.getFilm($scope.loadInfo,$scope.loadError);
}]);
