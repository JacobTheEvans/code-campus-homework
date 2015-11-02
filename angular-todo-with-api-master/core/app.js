var app = angular.module("todoApp",[]);

var genRandInt = function(min,max) {
  return Math.round(Math.random() * (max - min)) + min
};

app.service("todoRequests", function($http) {
  this.getItems = function(onSuc, onFail) {
    $http.get("http://mean.codingcamp.us/todo/jacobevans")
    .success(onSuc)
    .error(onFail);
  };
  this.addItem = function(onSuc, onFail, data) {
    var item = {
      title: data.title,
      description: data.description,
      completed: false,
      price: parseInt(data.priceOfItem),
      imgUrl: data.imageUrl
    }
    $http.post("http://mean.codingcamp.us/todo/jacobevans", item)
    .success(onSuc)
    .error(onFail);
  };
  this.updateItem = function(onSuc, onFail, data) {
    var item = {
      _id: data._id,
      title: data.title,
      description: data.description,
      completed: data.completed,
      price: parseInt(data.priceOfItem),
      imgUrl: data.imageUrl,
    }
    $http.put("http://mean.codingcamp.us/todo/jacobevans", item)
    .success(onSuc)
    .error(onFail);
  };
  this.deleteItem = function(onSuc, onFail, id) {
    var item = {
      _id: id
    };
    $http.delete("http://mean.codingcamp.us/todo/jacobevans", item)
    .success(onSuc)
    .error(onFail);
  };
});

app.controller("mainController", ['$scope', 'todoRequests', function($scope,todoRequests) {
  $scope.formItem = {};
  $scope.items = [];
  $scope.update = function(data) {
    $scope.items = data;
  };

  $scope.error = function(err) {
    console.log("Error: " + err);
  };

  $scope.loadItems = function() {
    todoRequests.getItems($scope.update,$scope.error);
  };

  $scope.addItem = function(item) {
    todoRequests.addItem($scope.loadItems,$scope.error,item);
  };

  $scope.updateItem = function(item) {
    todoRequests.updateItem($scope.loadItems,$scope.error,item);
  };

  $scope.checked = function(item) {
    item.completed = true;
    todoRequests.updateItem($scope.loadItems,$scope.error,item);
  }

  $scope.deleteItem = function(item) {
    todoRequests.deleteItem($scope.loadItems,$scope.error,item._id);
  };
}]);
