var readlineSync = require("readline-sync");

var genRandInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

var Character = function(name, health, inv) {
  var self = this;
  self.name = name;
  self.health = health;
  self.inv = inv;
  self.local = "";
  self.setLocal = function(local) {
    self.local = local;
  }
  self.takeDamage = function(amount) {
    self.health -= amount;
  }
  self.gainHealth = function(amount) {
    self.health += amount;
  }
  self.loseItem = function(item) {
    var index = inv.indexOf(item);

    if (index > -1) {
        self.inv.splice(index, 1);
    }
  }
  self.gainItem = function(item) {
    self.inv.push(item);
  }
  self.print = function() {
    console.log(self.name + "\nHealth: " + self.health +"\nInventory: " + self.inv.toString());
  }
};

var genEnemy = function() {
  var names = ["Integer overflow","Null Byte","SQL Injection","XSS Script","Cross-Site Request Forgery"];
  var items = ["mushroom","malware","doge"];
  var health = genRandInt(50,100);
  return new Character(names[genRandInt(0,names.length - 1)], health, items[genRandInt(0,items.length - 1)]);
};

var battle = function(player){
  var enemy = genEnemy();
  readlineSync.question("A wild " + enemy.name + " appears.\nPress Enter To Continue: ");
  var battleGoing = true;
  while(battleGoing) {
    var choice = readlineSync.question("Will you run or attack: ");
    if(choice == "run") {
      var chance = genRandInt(0,1);
      if(chance) {
        console.log("Runaway, Runaway!");
        return true;
      } else {
        console.log("You tried to runaway but failed.");
        var damage = genRandInt(10,40);
        player.takeDamage(damage);
        console.log("You take " + damage + " points of damage.");
        if(player.health <= 0) {
          return false;
        }
      }
    } else {
      var damage = genRandInt(10,40);
      enemy.takeDamage(damage);
      console.log(enemy.name + " takes " + damage + " points of damage.");
      if(player.health <= 0) {
        return false;
      }
      var damage = genRandInt(10,40);
      player.takeDamage(damage);
      console.log("You take " + damage + " points of damage.");
      if(enemy.health <= 0) {
        player.gainItem(enemy.inv);
        console.log(player.name + " killed " + enemy.name + " and gained a " + enemy.inv.toString() + ".");
        return true;
      }
    }
  }
};

var main = function() {
  readlineSync.question("Welcome traveler to the land of JavaScript a land of beautiful ideas and well written code. But there are also terribly awful products and bug ridden code.\nPress Enter To Continue:");
  var name = readlineSync.question("What is your name programmer: ");
  var player = new Character(name,100,["BASIC manual"]);
  player.setLocal("in the land of Google");
  var gameGoing = true;
  while(gameGoing) {
    var choice = readlineSync.question("You are " + player.local + ".\nWhat are you going to do: ");
    if(choice.toLowerCase() == "walk") {
      var event = genRandInt(1,3);
      if(event == 2) {
        var isAlive = battle(player);
        if(!isAlive) {
          gameGoing = false;
          console.log(player.name + " has died.\nWell your dead now so shut up.");
        }
      }
    } else if(choice.toLowerCase() == "i" || choice.toLowerCase() == "p") {
      player.print();
    } else if(choice.toLowerCase() == "dance") {
      console.log(player.name + " dances, you feel better.");
    }
    else {
      console.log("Commands: p -print, i -inventory, h -help, walk -walk(duh), dance -dance");
    }
  }
};

main();
