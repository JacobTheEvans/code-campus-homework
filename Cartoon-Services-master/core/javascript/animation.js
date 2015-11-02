var closeForm = function(){
  $("#newPost").slideUp("slow");
};

var showForm = function() {
  $("#newPost").slideDown("slow");
};

$(document).ready(function() {
  $("#newPost").hide();
});
