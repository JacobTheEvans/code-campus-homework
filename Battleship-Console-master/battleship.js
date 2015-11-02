var readlineSync = require('readline-sync');

var Local = function(isShip,isHit) {
  var self = this;
  self.isShip = isShip;
  self.isHit = isHit;
  self.getHit = function() {
    self.isHit = true;
  };
};

var Map = function(length,width) {
  var self = this;
  self.kills = 0;
  self.length = length;
  self.width = width;
  self.map = [];
  self.genMap = function() {
    for(var i = 0; i < self.length; i++) {
      self.map.push([]);
      for(var x = 0; x < self.width; x++) {
        if(genNumInRange(1,5) === 3) {
          self.map[i].push(new Local(true,false));
        } else {
          self.map[i].push(new Local(false,false));
        }
      }
    }
  };
  self.displayMap = function() {
    var displayGrid = [];
    for(var i = 0; i < self.map.length; i++) {
      displayGrid.push([]);
      for(var x = 0; x < self.map[i].length; x++) {
        if(self.map[i][x].isShip == true) {
          if(self.map[i][x].isHit == true) {
            displayGrid[i][x] = "X";
          } else {
            displayGrid[i][x] = "O";
          }
        } else {
          if(self.map[i][x].isHit == true) {
            displayGrid[i][x] = "M";
          } else {
            displayGrid[i][x] = "O";
          }
        }
      }
    }
    displayStr = "   ";
    for(var i = 0; i < displayGrid.length; i++) {
      displayStr += i + " ";
    }
    displayStr += "\n   ";
    for(var i = 0; i < displayGrid.length; i++) {
      displayStr += "- ";
    }
    displayStr += "\n";
    for(var i = 0; i < displayGrid.length; i++) {
      displayStr += i + "| ";
      for(var x = 0; x < displayGrid[i].length; x++) {
        displayStr += displayGrid[i][x] + " ";
        if(x == displayGrid.length -1) {
          displayStr += "\n";
        }
      }
    }
    return displayStr;
  };
  self.attack = function(x,y) {
    if(x > self.width -1 || x < 0) {
      console.log("These coordinates are not on the map.");
      return false;
    } else if(y > self.length -1 || y < 0) {
      console.log("These coordinates are not on the map.");
      return false;
    }
    var local = self.map[x][y];
    if(local.isShip == true) {
      if(local.isHit == false ) {
        local.isHit = true;
        self.kills++;
        console.log("YES! You sunk a battle ship.");
      } else {
        console.log("You already hit that ship.");
      }
    } else {
      local.isHit = true;
      console.log("You hit a whale but not a ship.");
    }
  }
};

var genNumInRange = function(max,min) {
  return Math.floor(Math.random() * (max - min +1)) + min;
};

var isNumeric = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

var main = function() {
  var game = new Map(10,10);
  game.genMap();
  console.log("Welcome to battle ships!\n");
  console.log("    __|__ |___| |\\\n    |o__| |___| | \\\n    |___| |___| |o \\\n   _|___| |___| |__o\\\n  /...\\_____|___|____\\_/\n  \\   o * o * * o o  /\n~~~~~~~~~~~~~~~~~~~~~~~~~~\n");
  console.log("You are an island defender and must keep it safe from invaders.");
  while(game.kills < 5) {
    var choice = readlineSync.question("What will you do: ").toLowerCase();
    if(choice == "m") {
      console.log("\n" + game.displayMap());
    } else if(choice == "a") {
      var cord = readlineSync.question("Coordinates(x,y): ").toLowerCase();
      var temp = cord.split(",");
      if(temp.length > 2 || temp.length < 2) {
        console.log("Not valid Coordinates.");
      } else {
        var pass = true;
        for(var i = 0; i < temp.length; i++) {
          if(!isNumeric(temp[i])) {
            pass = false;
          }
        }
        if(pass) {
          game.attack(temp[0],temp[1]);
        } else {
          console.log("Not valid Coordinates.");
        }
      }
    } else if(choice == "i" || choice == "k") {
      console.log("Number of kills: " + game.kills);
    } else {
      console.log("Options: ");
      console.log("m -map, a -attack, k or i -number of kills, h -help");
    }
  }
  console.log("YOU WIN!");
  console.log("You killed the invaders.");
  var choice = readlineSync.question("Play again(y/n): ").toLowerCase();
  if(choice == "y") {
    main();
  }
};

main();
