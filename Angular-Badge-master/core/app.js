var badgeApp = angular.module("badgeApp",[]);

badgeApp.controller("mainController",["$scope", function($scope){
  $scope.badges = [];
  $scope.formData = {};
  $scope.valid = false;
  $scope.submitData = function() {
    if($scope.validateForm().length == 0) {
      $scope.createNewBadge();
    } else {
      alert($scope.validateForm().toString());
    }
  };
  $scope.isFilledOut = function () {
    var errors = [];
    if(!$scope.formData.firstName){
      errors.push("No First Name");
    }
    if(!$scope.formData.lastName) {
      errors.push("No Last Name");
    }
    if(!$scope.formData.email) {
      errors.push("No Last Email");
    }
    if(!$scope.formData.birth) {
      errors.push("No Place of Birth");
    }
    if(!$scope.formData.phone) {
      errors.push("No Phone Number");
    }
    if(!$scope.formData.food) {
      errors.push("No Favorite Food");
    }
    if(!$scope.formData.about) {
      errors.push("No About");
    }
    if(errors.length > 0) {
      $scope.valid = false;
    } else {
      $scope.valid = true;
    }
  }
  $scope.validateForm = function () {
    var errors = [];
    if($scope.formData.firstName && $scope.formData.firstName.length < 3) {
      errors.push("First Name Must Be 3 Charcters At Least");
    }
    if($scope.formData.lastName && $scope.formData.lastName.length < 3) {
      errors.push("Last Name Must Be 3 Charcters At Least");
    }
    if($scope.formData.email && $scope.formData.email.length < 3) {
      errors.push("Email Must Be 3 Charcters At Least");
    }
    if($scope.formData.birth && $scope.formData.birth.length < 3) {
      errors.push("Place of birth Must Be 3 Charcters At Least");
    }
    if($scope.formData.phone && $scope.formData.phone.length < 3) {
      errors.push("Phone Number Must Be 3 Charcters At Least");
    }
    if($scope.formData.food && $scope.formData.food.length < 3) {
      errors.push("Food Must Be 3 Charcters At Least");
    }
    if($scope.formData.about && $scope.formData.about.length < 3) {
      errors.push("About Must Be 3 Charcters At Least");
    }
    if($scope.formData.phone && !(!isNaN(parseFloat($scope.formData.phone)) && isFinite($scope.formData.phone))) {
      errors.push("Phone Number Must Be a Number");
    }
    return errors;
  };
  $scope.genRandInt = function(max,min) {
    return Math.floor(Math.random() * (max - min +1)) + min
  }
  $scope.genRandColor = function() {
    var colors = ["#00e5e5","#ffae19","#663096","#323232","#ffd700"];
    return colors[$scope.genRandInt(-1,colors.length)];
  }
  $scope.createNewBadge = function() {
    $scope.badges.push({
      name: $scope.formData.firstName + " " + $scope.formData.lastName,
      number: $scope.formData.phone,
      birth: $scope.formData.birth,
      food: $scope.formData.food,
      email: $scope.formData.email,
      about: $scope.formData.about,
      backColor: $scope.genRandColor()
    });
  };
}]);
