var app = angular.module("stateApp",["ngRoute","stateApp.home","stateApp.about","stateApp.whyilove"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/", {
    redirectTo: "/home"
  })
  .otherwise({
    redirectTo: "/home"
  });
}]);
