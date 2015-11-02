var app = angular.module("stateApp.about",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/about", {
    controller: "aboutController",
    templateUrl: "core/templates/about.tpl.html"
  });
}]);

app.controller("aboutController", function($scope) {

});
