"use strict";
var app = angular.module("searchApp",[]);

app.service("dataBase", function() {
  var data = ["jacob","amit","mark","tom","bill","jerry","frank","tim","dog","cat","merry","darrell"];
  this.getData = function() {
    return data;
  };
  this.getFilteredData = function(str) {
    var result = data.filter(function(value) {
      return value.indexOf(str) != -1;
    });
    return result;
  };
});

app.controller("mainController",["$scope", "dataBase", function($scope,dataBase) {
  $scope.userInput = "";
  $scope.getData = function(str) {
    if(str != "") {
      return dataBase.getFilteredData(str.toLowerCase());
    } else {
      return [];
    }
  };
}]);
