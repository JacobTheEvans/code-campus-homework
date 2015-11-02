var app = angular.module("infoApp",[]);

app.service("pokeRequests",["$http", function($http) {
  this.getPokemon = function(isSuc, isFail, id) {
    $http.get("http://pokeapi.co/api/v1/pokemon/" +  id +"/")
    .then(isSuc,isFail);
  };
  this.getPokemonImg = function(isSuc, isFail, url) {
    $http.get("http://pokeapi.co" + url)
    .then(isSuc,isFail);
  };
}]);

app.controller("mainController",["pokeRequests", "$scope", function(pokeRequests ,$scope) {
  $scope.pokemon = {};
  $scope.logError = function(response) {
    console.log(response.statusText);
  };

  $scope.setPokemonImage = function(response) {
    $scope.pokemon.url = "http://pokeapi.co" + response.data.image;
  };

  $scope.setPokemonInfo = function(response) {
    $scope.pokemon.name = response.data.name;
    $scope.pokemon.attack = response.data.attack;
    $scope.pokemon.abilities = "";
    for(var i = 0; i < response.data.abilities.length; i++) {
      $scope.pokemon.abilities += response.data.abilities[i].name;
      if(i != response.data.abilities.length -1) {
        $scope.pokemon.abilities += ", ";
      }
    }
    pokeRequests.getPokemonImg($scope.setPokemonImage, $scope.logError, response.data.sprites[0].resource_uri);
  };

  $scope.getPokemon = function() {
    pokeRequests.getPokemon($scope.setPokemonInfo,$scope.logError,$scope.id);
  };

  $scope.updatePokemon = function() {
    $scope.getPokemon();
  };
}]);
