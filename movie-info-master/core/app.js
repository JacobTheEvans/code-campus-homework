var app = angular.module("movieApp",[]);

app.service("movieRequests",["$http", function($http) {
  this.getMovie = function(name, onSuc, onFail) {
    $http.get("http://www.omdbapi.com/?t=" + name)
    .then(onSuc,onFail);
  };
}]);

app.controller("mainController", ["$scope", "movieRequests", function($scope, movieRequests) {
  $scope.setMovie = function(response) {
    $scope.movie = response.data;
    console.log($scope.movie);
  };

  $scope.logError = function(response) {
    console.log(response.statusText);
  };

  $scope.getMovie = function(name) {
    movieRequests.getMovie(name,$scope.setMovie,$scope.logError);
  };
}]);
