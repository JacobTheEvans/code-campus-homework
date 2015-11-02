var app = angular.module("myApp",[]);

app.controller("addController", ['$scope', function($scope){
  $scope.add = function() {
    return parseInt($scope.num1) + parseInt($scope.num2);
  };
}]);

app.controller("multiController", ['$scope', function($scope){
  $scope.mutli = function() {
    return parseInt($scope.num1) * parseInt($scope.num2);
  };
}]);
