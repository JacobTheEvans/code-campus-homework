var app = angular.module("timerApp",[]);

app.controller("mainController", function($scope,$timeout) {
  $scope.timerEnd = false;
  $scope.time = 4723;
  $scope.timeStr = "";
  $scope.setTimeStr = function() {
    if($scope.time > 3600) {
      if(Math.floor($scope.time / 3600) < 10) {
        $scope.timeStr = "0" + Math.floor($scope.time / 3600).toString();
      } else {
        $scope.timeStr = Math.floor($scope.time / 3600).toString();
      }
      if(Math.floor($scope.time % 3600 / 60) < 10) {
        $scope.timeStr += ":0" + Math.floor($scope.time % 3600 / 60).toString();
      } else {
        $scope.timeStr += ":" + Math.floor($scope.time % 3600 / 60).toString();
      }
      if((($scope.time % 3600) % 60) < 10) {
        $scope.timeStr += ":0" + (($scope.time % 3600) % 60).toString();
      } else {
        $scope.timeStr += ":" + (($scope.time % 3600) % 60).toString();
      }
    } else if($scope.time > 59) {
      if(Math.floor($scope.time / 60) < 10) {
        $scope.timeStr = "00:0" + Math.floor($scope.time / 60).toString();
      } else {
        $scope.timeStr = "00:" + Math.floor($scope.time / 60).toString();
      }
      if($scope.time % 60 < 10){
        $scope.timeStr += ":0" + ($scope.time % 60).toString();
      } else {
        $scope.timeStr += ":" + ($scope.time % 60).toString();
      }
    } else {
      if($scope.time < 10) {
        $scope.timeStr = "00:00:0" + $scope.time;
      } else {
        $scope.timeStr = "00:00:" + $scope.time;
      }
    }
  }
  $scope.onTimeout = function() {
    $scope.time--;
    if($scope.time >= 0) {
      $scope.setTimeStr();
      var timeout = $timeout($scope.onTimeout,1000);
    } else {
      $scope.timerEnd = true;
    }
  };
  var timeout = $timeout($scope.onTimeout,1000);
});
