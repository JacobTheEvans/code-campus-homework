"use strict";
var app = angular.module("listApp");

app.service("computerData", function() {
  this.getData = function() {
    return [
      {
        name:"OnePlus 2",
        price:389.00,
        img:"https://content.oneplus.net/skin/frontend/oneplus2015/default/images/products/two/phone-front-face.png"
      },
      {
        name:"ASUS ROG",
        price:2159.00,
        img:"http://ecx.images-amazon.com/images/I/81SvZUKsxdL._SL1500_.jpg"
      },
      {
        name:"THE FORCE™",
        price:6499.00,
        img:"http://images.gamenguide.com/data/images/full/14223/maingear-force.jpg?w=720"
      },
    ];
  };
});

app.service("otherData", function() {
  this.getData = function() {
    return [
      {
        name:"Parrot AR Drone Quadricopter",
        price:274.12,
        img:"http://ecx.images-amazon.com/images/I/41gUoRsawiL.jpg"
      },
      {
        name:"Xperia Z4 tablet",
        price:879.00,
        img:"http://i.ytimg.com/vi/GTYvnPQmIzE/maxresdefault.jpg"
      },
    ];
  };
});
