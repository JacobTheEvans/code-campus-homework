var app = angular.module("stateApp.whyilove",["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {
  $routeProvider.when("/whyilove", {
    controller: "whyController",
    templateUrl: "core/templates/whyilove.tpl.html"
  });
}]);

app.controller("whyController", function($scope) {

});
