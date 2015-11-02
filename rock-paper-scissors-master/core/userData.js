module.exports = function(data) {
  var data = data || [];
  var dataSerice = {
    addData: function(newData) {
      data.push(newData);
    },
    authorizeUser: function(token) {
      var user = null;
      for(var i = 0; i < data.length; i++) {
        if(data[i].token == token) {
          user = data[i];
        }
      }
      if(user) {
        var currentTime = new Date();
        if(currentTime.getTime() >= user.expires.getTime()) {
          return false;
        } else {
          return true;
        }
      }
      return false;
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
    getDataByToken: function(token) {
      var index = -1;
      for(var i = 0; i < data.length; i++) {
        if(data[i].token == token) {
          index = i;
        }
      }
      return data[index];
    },
  };
  return(dataSerice);
};
