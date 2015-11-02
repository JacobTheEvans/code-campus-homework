module.exports = function(_id,token,expires,minPlayers,players) {
  this._id = _id;
  this.token = token;
  this.expires = expires;
  this.minPlayers = minPlayers
  this.players = players;
};
