function dayOfWeek(dateObject){
  var dayIndex = dateObject.getDay();
  switch(dayIndex) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday"
      break;
  }
}

function formatHourToTwelve(hours){
  if (hours > 12) {
    hours -= 12;
  } else if (hours === 0) {
    hours = 12;
  }
  return hours;
}

function formatMins(mins){
  if(mins < 10){
    return "0" + mins;
  }
  return mins;
}

function getAMorPM(dateObject){
  var hours = dateObject.getHours();
  var mid='AM';
  if(hours > 12){
    var mid="PM";
  }
  return mid;
}

function getHoursAndMins(dateObject){
  var hour = dateObject.getHours();
  var min = dateObject.getMinutes();
  return(formatHourToTwelve(hour) + ":" + formatMins(min));
}


var todaysDate = new Date();
console.log("Today is: " + dayOfWeek(todaysDate));
console.log("Time is: " + getHoursAndMins(todaysDate) + " " + getAMorPM(todaysDate));
