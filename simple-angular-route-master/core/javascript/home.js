var app = angular.module("stateApp.home",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/home", {
    controller: "homeController",
    templateUrl: "core/templates/home.tpl.html"
  });
}]);

app.controller("homeController", function($scope) {

});
