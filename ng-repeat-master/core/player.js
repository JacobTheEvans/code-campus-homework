var Player = function(name) {
  self = this;
  self.name = name;
  self.killed = [];
  self.addKill = function(name,rank,clans,color) {
    self.killed.push({
      name: name,
      rank: rank,
      clans: clans,
      color: color
    });
  };
}

var player = new Player("Larry");
player.addKill("Berry", 2012, ["Horde","Alliance"],"#00e5e5");
player.addKill("Tod", 1322, ["nubz","Btn"],"#663096");
player.addKill("Mr. Man", 612, ["Horde","Crit","AFK"],"#ffae19");
