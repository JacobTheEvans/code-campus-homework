var express = require("express");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var Bounty = require("model.js").Bounty;
mongoose.connect("mongodb://localhost/bounty");

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post("/bounty", function(req,res) {
  var bounty = new Bounty(req.body);
  bounty.save(function(err, data) {
    if(err) {
      res.status(403).send(err);
    }
    res.status(200).send(data);
  });
});

app.get("/bounty", function(req,res) {
  Bounty.find({}, function(err, data) {
    if(err) {
      res.status(400).send(err);
    }
    res.status(200).send(data || "No Data Present");
  });
});

app.get("/bounty/:_id", function(req,res) {
  Bounty.findOne({"_id": req.params._id}, function(err,data) {
    if(err) {
      res.status(400).send(err);
    }
    res.status(200).send(data || "Data not Found");
  });
});

app.put("/bounty/:_id", function(req,res) {
  Bounty.findOne({"_id": req.params._id}, function(err, data) {
    if(err) {
      res.status(400).send(err);
    }
    if(req.body.firstName) {
      data.firstName = req.body.firstName;
    }
    if(req.body.lastName) {
      data.lastName = req.body.lastName;
    }
    if(req.body.living) {
      data.living = req.body.living;
    }
    if(req.body.bountyAmt) {
      data.bountyAmt = req.body.bountyAmt;
    }
    if(req.body.type) {
      data.type = req.body.type;
    }
    data.save();
    res.status(200).send(data);
  });
});

app.delete("/bounty/:_id", function(req,res) {
  console .log("Called");
  Bounty.findOne({"_id": req.params._id}, function(err, data) {
    if(err) {
      console.log(err);
      res.status(400).send(err);
    }
    data.remove();
    data.save();
    res.status(200).send(data);
  });
});

app.listen(9345);
