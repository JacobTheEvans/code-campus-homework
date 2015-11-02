var express = require("express");
var bodyParser = require("body-parser");
var uuid = require("uuid");
var user = require("./core/user.js");
var game = require("./core/game.js");
var userService = require("./core/userData.js");
var gameService = require("./core/gameData.js")

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use(function(req,res,next) {
  if(!req.headers.playertoken && req.url != "/login") {
    res.send("Must login");
  }
  if(!userData.authorizeUser(req.headers.playertoken) && req.url != "/login") {
    res.send("Player token does not exist or is expired");
  }
  next();
});

var userData = new userService();
var gameData = new gameService();

app.post("/login", function(req,res) {
  if(!req.body.name) {
    res.send("Name must be in JSON");
  }
  var users = userData.getData();
  var pass = true;
  for(var i = 0; i < users.length; i++) {
    if(users[i].name == req.body.name) {
      pass = false;
      res.send("Username Taken");
    }
  }
  if(pass) {
    var expires = new Date();
    expires.setMinutes(expires.getMinutes() + 20);
    var token = "Token " + uuid.v1();
    var newUser = new user(req.body.name,uuid.v4(),token,expires);
    userData.addData(newUser);
    res.send(token);
  }
});

app.post("/makegame", function(req,res) {
  if(!req.body.minPlayers) {
    res.send("minPlayers must be in JSON");
  }
  var expires = new Date();
  expires.setMinutes(expires.getMinutes() + 20);
  var token = "Token " + uuid.v1();
  var newGame = new game(uuid.v4(),token,expires,req.body.minPlayers,[userData.getDataByToken(req.headers.playertoken).name]);
  gameData.addData(newGame);
  res.send(token);
});

app.post("/joingame", function(req,res) {
  if(!req.body.gameToken) {
    res.send("gameToken must be in JSON");
  }
  if(gameData.authorizeGame(req.body.gameToken)) {
    var gameId = gameData.getDataByToken(req.body.gameToken)._id;
    var user = userData.getDataByToken(req.headers.playertoken);
    gameData.updateData(gameId,user);
    res.send("Success");
  }
  res.send("gameToken is not valid");
});

app.post("/turn", function(req,res) {
  //Check if you have already taken your turn if not then apply decisions
});

app.get("/getGames", function(req,res) {
  res.send(gameData.getData());
});

app.listen(9454);
