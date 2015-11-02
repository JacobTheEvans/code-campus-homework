var lyrics = ["This","hit","that","ice","cold","Michelle","Pfeiffer","that","white","gold","This","one","for","them","hood","girls","Them","good","girls","straight","masterpieces","Stylin","whilen","livin","it","up","in","the","city","Got","Chucks","on","with","Saint","Laurent","Got","kiss","myself","Im","so","pretty"];

function printAll(){
  var elem = document.getElementById("lyrics");
  var result = "";
  for(var i = 0; i < lyrics.length; i++){
    if((i > 0)){
      result += " ";
    }
    result += lyrics[i];
  }
  elem.innerHTML = result;
}

function printBack(){
  var elem = document.getElementById("lyrics");
  var result = "";
  for(var i = lyrics.length - 1; i >= 0; i--){
    if((i > 0)){
      result += " ";
    }
    result += lyrics[i];
  }
  elem.innerHTML = result;
}

function printOther(){
  var elem = document.getElementById("lyrics");
  var result = "";
  for(var i = 0; i < lyrics.length; i += 2){
    if((i > 0)){
      result += " ";
    }
    result += lyrics[i];
  }
  elem.innerHTML = result;
}

function printOtherTwo(){
  var elem = document.getElementById("lyrics");
  var result = "";
  var counter = 0;
  for(var i = 0; i < lyrics.length; i ++, counter++){
    if (i == 1){
      result += lyrics[1] + " ";
      result += lyrics[0];
    }

    if((i > 0)){
      result += " ";
    }

    if(counter > 1){
      counter = 0;
      result += lyrics[i + 1] + " ";
      result += lyrics[i];
    }
  }
  elem.innerHTML = result;
}
