"use strict";
var app = angular.module("listApp",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    redirectTo: "/one"
  })
  .when("/one", {
    templateUrl: "core/templates/list.tpl.html",
    controller: "firstController"
  })
  .when("/two", {
    templateUrl: "core/templates/list.tpl.html",
    controller: "secondController"
  })
  .otherwise({
    redirectTo: "/one"
  });
}]);

app.controller("firstController",["$scope", "computerData", function($scope,computerData) {
  $scope.title = "Computer Tech Wish List";
  $scope.getData = function() {
    $scope.data = computerData.getData();
  };
}]);

app.controller("secondController",["$scope", "otherData", function($scope,otherData) {
  $scope.title = "Other Tech Wish List";
  $scope.getData = function() {
    $scope.data = otherData.getData();
  };
}]);

app.directive("printList", function() {
  var controller = function($scope) {
    $scope.getTotal = function() {
      var total = 0;
      for(var i = 0; i < $scope.items.length; i++) {
        var item = $scope.items[i];
        total += item.price;
      }
      return total;
    };
  };
  return {
    restrict: "AE",
    scope: {
      items:"="
    },
    templateUrl:"core/templates/itemDirective.tpl.html",
    controller: controller
  }
});
