function getVowels(string) {
  var vowels = ['a','e','i','o','u'];
  var total = 0;

  for(var i = 0; i < string.length; i++){
    if(vowels.indexOf(string.charAt(i).toLowerCase()) !== -1){
      total += 1;
    }
  }

  return total;
}


function displayCount(){
  var word = document.getElementById("word").value;
  console.log("Word: " + word);
  var elem = document.getElementById("output");
  var numOfV = getVowels(word);
  console.log(numOfV);
  elem.innerHTML = "Vowels: " + numOfV + "<br>Consonants: " + (word.length - numOfV);
}
