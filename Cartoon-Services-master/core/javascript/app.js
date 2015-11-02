var postApp = angular.module("postApp",[]);

postApp.service("getCartoons", ["storeCartoons", function(storeCartoons) {
  this.getCartoons = function() {
    return storeCartoons.getCartoons();
  };
}]);

postApp.service("addCartoon", ["storeCartoons", function(storeCartoons) {
  this.addCartoon = function(title,desc,url) {
    storeCartoons.addCartoon(title,desc,url);
  };
}]);

postApp.controller("mainController",["$scope", "getCartoons", "addCartoon", function($scope,getCartoons,addCartoon){
  $scope.formData = {};
  $scope.cartoons = getCartoons.getCartoons();
  $scope.addCartoon = function() {
    addCartoon.addCartoon($scope.formData.title,$scope.formData.desc,$scope.formData.url);
    $scope.formData.title = "";
    $scope.formData.desc = "";
    $scope.formData.url = "";
  }
}]);
