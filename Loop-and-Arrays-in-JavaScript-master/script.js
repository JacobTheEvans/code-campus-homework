function createEvenArray(highNum){
  var result = [];
  for(var i = 1; i <= highNum; i++){
    if(i % 2 === 0 && i != 0){
      result.push(i);
    }
  }
  return result;
}

function addOdds(evensArr){
  var result = evensArr.slice(0);
  result.concat(evensArr)
  for(var i = 0; i < evensArr.length; i++){
    var odd = evensArr[i] + 1;
    result.push(odd);
  }
  return result;
}

function sortNums(numberArray) {
    return numberArray.sort(function(a, b){return a-b});
}

var arr = createEvenArray(10);
var totalArr = addOdds(arr);
var finalArray = sortNums(totalArr);
console.log(finalArray);
