var myApp = angular.module("myApp",['ng-code-mirror']);

myApp.service("executeCode", function() {
  this.execute = function(code,isSuc,isFail) {
    try {
      eval(code);
      if(typeof app == "undefined") {
        isFail("App not defined make sure to name the var 'app'.");
        return false;
      }
      if(typeof app != "object") {
        isFail("Make sure to make app an angular.module");
        return false;
      }
      if(app.name != "firstApp") {
        isFail("Make sure to name the app 'firstApp'.");
        return false;
      }
      isSuc("Passed! Good Job.");
      return true;
    } catch(err) {
      isFail(err);
      return false;
    }
  };
});

myApp.controller("mainController", function($scope,executeCode) {
  $scope.goal = "Make an angular app call firstApp";
  $scope.setOutput = function(output) {
    $scope.testOutput = output.toString();
  }
  $scope.execute = function() {
    executeCode.execute($scope.code,$scope.setOutput,$scope.setOutput);
  };
});
