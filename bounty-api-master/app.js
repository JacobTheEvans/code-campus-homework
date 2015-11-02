var express = require("express");
var bodyParser = require("body-parser");
var uuid = require('uuid');

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var Bounty = function(firstName,lastName,living,amount,type,_id) {
  this.firstName = firstName || "Unknown";
  this.lastName = lastName || "Unknown";
  this.living = living || "Unknown";
  this.amount = amount || "Not specified";
  this.type = type || "Unknown";
  this._id = _id;
};

var DataService = function(data) {
  var data = data || [];
  var dataSerice = {
    addData: function(newData) {
      data.push(newData);
    },
    updateData: function(_id,newData) {
      for(var i = 0; i < data.length; i++) {
        if(data[i]._id == _id) {
          if(newData.firstName) {
            data[i].firstName = newData.firstName;
          }
          if(newData.lastName) {
            data[i].lastName = newData.lastName;
          }
          if(typeof newData.living != 'undefined') {
            data[i].living = newData.living;
          }
          if(newData.amount) {
            data[i].amount = newData.amount;
          }
          if(newData.type) {
            data[i].type = newData.type;
          }
         }
      }
    },
    deleteData: function(_id) {
      var index = -1;
      for(var i = 0; i < data.length; i++) {
        if(data[i]._id = _id) {
          index = i;
        }
      }
      if(index != -1) {
        array.splice(index,1);
        return true;
      } else {
        return false;
      }
    },
    getData: function() {
      return data;
    },
    getDataById: function(_id) {
      var index = -1;
      for(var i = 0; i < data.length; i++) {
        if(data[i]._id == _id) {
          index = i;
        }
      }
      return data[index];
    },
  };
  return(dataSerice);
};

var data = new DataService();

var getFormattedData = function() {
  var bounties = data.getData();
  var response = "<h1>Bounties</h1>";
  response += "<ul>";
  for(var i = 0; i < bounties.length; i++) {
    response += "<li>";
    response += "<h3>" + bounties[i].firstName + " " + bounties[i].lastName + "</h3>"
    response += "<h3>Classification: " + bounties[i].type + "</h3>";
    if(bounties[i].living) {
      response += "<h3>Status: Alive</h3>";
    } else {
      response += "<p>Status: Dead</p>";
    }
    response += "<h3>Amount: " + bounties[i].amount + " space bucks</h3>";
    response += "</li>";
  }
  response += "</ul>";
  return response;
};

app.get("/bounty", function(req,resp) {
  resp.send(getFormatedData());
});

app.post("/bounty", function(req,resp) {
  var pass = true;
  if(!req.body.firstName) {
    pass = false;
    resp.send("First Name required in JSON");
  }
  if(!req.body.lastName) {
    pass = false;
    resp.send("Last Name required in JSON");
  }
  if(typeof req.body.living == 'undefined') {
    pass = false;
    resp.send("living required in JSON");
  }
  if(!req.body.amount) {
    pass = false;
    resp.send("Amount required in JSON");
  }
  if(!req.body.type) {
    pass = false;
    resp.send("Type required in JSON");
  }
  if(pass) {
    var newBounty = new Bounty(req.body.firstName,req.body.lastName,req.body.living,req.body.amount,req.body.type,uuid.v4());
    data.addData(newBounty);
    resp.send(getFormatedData());
  }
});

app.put("/bounty/:_id", function(req,resp) {
  data.updateData(req.params._id,req.body);
  resp.send(data.getData());
});

app.delete("/bounty/:_id", function(req,resp) {
  data.deleteData(req.params._id);
  resp.send(data.getData());
});

app.listen(8080);
