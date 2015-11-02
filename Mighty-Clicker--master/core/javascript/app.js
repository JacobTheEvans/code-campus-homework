var app = angular.module("buttonApp",[]);

app.service("blueStorage", function() {
  var numOfClicks = 100;
  this.addClick = function() {
    numOfClicks += 1;
  };
  this.removeClick = function() {
    numOfClicks -= 1;
    if(numOfClicks <= 0) {
      numOfClicks = 100;
    }
  };
  this.getClicks = function() {
    return numOfClicks;
  };
});

app.service("redStorage", function() {
  var numOfClicks = 100;
  this.addClick = function() {
    numOfClicks += 1;
  };
  this.removeClick = function() {
    numOfClicks -= 1;
    if(numOfClicks <= 0) {
      numOfClicks = 100;
    }
  };
  this.getClicks = function() {
    return numOfClicks;
  };
});

app.controller("mainController", ["$scope", "blueStorage", "redStorage", function($scope, blueStorage, redStorage){
  $scope.updateCount = function() {
    $scope.blueCount = blueStorage.getClicks();
    $scope.redCount = redStorage.getClicks();
  };
  $scope.clickBlue = function() {
    blueStorage.addClick();
    redStorage.removeClick();
    $scope.updateCount();
  };
  $scope.clickRed = function() {
    redStorage.addClick();
    blueStorage.removeClick();
    $scope.updateCount();
  };
  $scope.updateCount();
}]);
