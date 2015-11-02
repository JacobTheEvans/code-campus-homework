var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var Car = require("./model.js").Car;
var Person = require("./model.js").Person;
mongoose.connect("mongodb://localhost/personandcars3");

var app = express();
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/cars", function(req,res) {
  Car.find({}, function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      res.status(200).send(data);
    }
  })
});

app.post("/cars", function(req,res) {
  if(!req.body.make) {
    res.status(400).send("Make required in JSON");
  }
  if(!req.body.model) {
    res.status(400).send("Model required in JSON");
  }
  if(!req.body.year) {
    res.status(400).send("Year required in JSON");
  }
  if(!req.body.engine) {
    res.status(400).send("Engine required in JSON");
  }
  if(!req.body.miles) {
    res.status(400).send("Miles required in JSON");
  }
  var newData = {
    make: req.body.make,
    model: req.body.model,
    year: req.body.year,
    engine: req.body.engine,
    miles: req.body.miles
  };
  var newCar = new Car(newData);
  newCar.save(function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      res.status(200).send(data);
    }
  });
});

app.put("/cars/:_id", function(req,res) {
  Car.findOneAndUpdate({"_id": req.params._id}, req.body, function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      res.status(200).send(data);
    }
  });
});

app.delete("/cars/:_id", function(req,res) {
  if(!req.params._id) {
    res.status(400).send("Need id in URL");
  }
  Car.findOne({"_id": req.params._id}, function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      data.remove();
      data.save();
      res.status(200).send(data);
    }
  });
});

app.get("/person", function(req,res) {
  Person.find({}).populate("carsOwned").exec(function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      res.status(200).send(data);
    }
  })
});

app.post("/person", function(req,res) {
  if(!req.body.name) {
    res.status(400).send("Name required in JSON");
  }
  var newData = {
    name: req.body.name,
  };
  var newPerson = new Person(newData);
  newPerson.save(function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      res.status(200).send(data);
    }
  });
});

app.put("/person/:_id", function(req,res) {
  Person.findOneAndUpdate({"_id": req.params._id}, req.body, function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      res.status(200).send(data);
    }
  });
});

app.delete("/person/:_id", function(req,res) {
  if(!req.params._id) {
    res.status(400).send("Need id in URL");
  }
  Person.findOne({"_id": req.params._id}, function(err,data) {
    if(err) {
      res.status(500).send(err);
    }
    if(data) {
      data.remove();
      data.save();
      res.status(200).send(data);
    }
  });
});

app.listen(8080);
