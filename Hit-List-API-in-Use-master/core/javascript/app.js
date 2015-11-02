var app = angular.module("hitListApp",[]);

app.service("hitListRequests", function($http) {
  this.getHits = function(onSuccess,OnError) {
    $http.get("http://mean.codingcamp.us:6543/hitlist.json")
    .success(onSuccess)
    .error(OnError);
  };
});

app.controller("mainController",["$scope","hitListRequests", function($scope, hitListRequests) {
  $scope.hitList = [];
  $scope.setHitList = function(data) {
    $scope.hitList = data;
  };
  $scope.callError = function(data) {
    console.log("Error, Data: " + data);
  };
  $scope.getList = function() {
    hitListRequests.getHits($scope.setHitList,$scope.callError);
  };
}]);
