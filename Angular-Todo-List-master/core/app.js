var todoApp = angular.module("todoApp",[]);

todoApp.controller("mainController",["$scope",function($scope) {
  if(window.localStorage.getItem("todoItems")) {
    $scope.todoItems = window.localStorage.getItem("todoItems").split(",");
  } else {
    $scope.todoItems = [];
  }
  $scope.addItem = function() {
    if(!($scope.todoItems.indexOf($scope.newItem) >= 0)) {
      $scope.todoItems.push($scope.newItem);
      window.localStorage.setItem("todoItems", $scope.todoItems);
    } else {
      alert("Item is already in the today list!");
    }
  }
  $scope.removeItem = function($index) {
    $scope.todoItems.splice($index, 1);
    window.localStorage.setItem("todoItems", $scope.todoItems);
  }
}]);
