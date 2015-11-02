var express = require("express");
var crypto = require("crypto");
var bodyParser = require("body-parser");

var app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var genId = function() {
  var current_date = (new Date()).valueOf().toString();
  var random = Math.random().toString();
  return crypto.createHash('sha1').update(current_date + random).digest('hex');
};

var User = function(name,description,imageUrl,checked,_id) {
  this.name = name;
  this.description = description;
  this.imageUrl = imageUrl;
  this.checked = checked;
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
          if(newData.name) {
            data[i].name = newData.name;
          }
          if(newData.description) {
            data[i].description = newData.description;
          }
          if(newData.imageUrl) {
            data[i].imageUrl = newData.imageUrl;
          }
          if(typeof newData.checked != 'undefined') {
            data[i].checked = newData.checked;
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

app.get("/", function(req,resp) {
  resp.send(data.getData());
});

app.get("/:_id", function(req,resp) {
  var _id = req.params._id;
  resp.send(data.getDataById(_id));
});

app.post("/", function(req,resp) {
  var pass = true;
  if(!req.body.name) {
    pass = false;
    resp.send("name is needed in json.");
  }
  if(!req.body.description) {
    pass = false;
    resp.send("description is needed in json.");
  }
  if(!req.body.imageUrl) {
    pass = false;
    resp.send("imageUrl is needed in json.");
  }
  if(typeof req.body.checked == 'undefined') {
    pass = false;
    resp.send("checked is needed in json");
  }
  if(pass) {
    var newUser = new User(req.body.name,req.body.description,req.body.imageUrl,req.body.checked,genId());
    data.addData(newUser);
    resp.send(data.getData());
  }
});

app.put("/:_id", function(req,resp) {
  data.updateData(req.params._id,req.body);
  resp.send(data.getData());
});

app.delete("/:_id", function(req,resp) {
  data.deleteData(req.params._id);
  resp.send(data.getData());
});

app.listen(8080);
