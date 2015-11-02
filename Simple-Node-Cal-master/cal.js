function addNums(num1,num2){
  return parseInt(num1) + parseInt(num2);
}

function subNums(num1,num2){
  return parseInt(num1) - parseInt(num2);
}

function multiNums(num1,num2){
  return parseInt(num1) * parseInt(num2);
}

function divNums(num1,num2){
  return parseInt(num1) / parseInt(num2);
}

function main(){
  var readlineSync = require('readline-sync');
  var firstNum = readlineSync.question("Please enter your first number: ");
  var secondNum = readlineSync.question("Please enter your second number: ");
  var option = readlineSync.question("Please enter the operation to perform: add, sub, mul, div: ");
  switch(option){
    case "add":
      console.log("Result: " + addNums(firstNum,secondNum));
      break;
    case "sub":
      console.log("Result: " + subNums(firstNum,secondNum));
      break;
    case "mul":
      console.log("Result: " + multiNums(firstNum,secondNum));
      break;
    case "div":
      console.log("Result: " + divNums(firstNum,secondNum));
      break;
    default:
      console.log("Not Valid Option.");
      break;
  }
}

main();
