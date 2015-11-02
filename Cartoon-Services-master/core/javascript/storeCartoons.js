var app = angular.module("postApp");

app.service("storeCartoons", function() {
  var cartoons = [
    {title: "Courage The Cowardly Dog", desc: "A very confusing show.", url: "http://ewallpapers-hub.com/wp-content/uploads/2015/03/Courage-the-Cowardly-Dog-hd-wallpaper.jpg"},
    {title: "Johhny Bravo", desc: "A self obsessed guy.", url: "http://www.licensing.biz/cimages/787ab273e5158d494b2b31adfb606320.png"},
    {title: "Powerpuff Girls", desc: "Super powered little girls.", url: "http://images1.houstonpress.com/imager/u/original/6372280/powerpuffgirls1.jpg"}
  ];
  this.getCartoons = function() {
    return cartoons;
  };
  this.addCartoon = function(title,desc,url) {
    if(title && desc && url) {
      cartoons.push({title: title, desc: desc, url: url});
    } else {
      return false;
    }
  };
});
