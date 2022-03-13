function init() {
  //grab the needles
  let secondNeedle = document.querySelector(".second-needle");
  let minuteNeedle = document.querySelector(".minute-needle");
  let hourNeedle = document.querySelector(".hour-needle");



  //get the current time
  let currentTime = new Date(Date.now());

  //to check if clock has started or not, so we don't have to get the current data again and again
  let clockStarted = false;
  //start the clock
  setInterval(() => {
    if (!clockStarted) {
      secondNeedle.style.transform = `rotate(${( ( currentTime.getSeconds() + 30 ) %60 ) * 6}deg)`;
      minuteNeedle.style.transform = `rotate(${( ( currentTime.getMinutes() + 30 ) %60 ) * 6}deg)`;
      //we add 6 and then do mod12 because here 0deg means 6 hours and not 0 hour
      hourNeedle.style.transform = `rotate(${( ( currentTime.getHours() + 6 ) % 12 ) *30}deg)`;
      
      clockStarted = true;
      
    }else {
        
    //regex to get numbers form the string like rotate(30deg)
      let numberPattern = /[0-9]+/g;

      //get the current rotation of the second needle
      let currentSecondNeedleDegree = parseInt(secondNeedle.style.transform.match(numberPattern)[0]);
      let currentMinuteNeedleDegree=parseInt(minuteNeedle.style.transform.match(numberPattern)[0]);
      let currentHourNeedleDegree=parseInt(hourNeedle.style.transform.match(numberPattern)[0]);


      //move the secondNeedle by 6 degree
      currentSecondNeedleDegree+=6;
      if(currentSecondNeedleDegree>=360){

        currentSecondNeedleDegree= currentSecondNeedleDegree%360;
        //since the second needle has moved more than 360degrees we have to move the minute needle
        currentMinuteNeedleDegree = parseInt(minuteNeedle.style.transform.match(numberPattern)[0]);
        currentMinuteNeedleDegree+=6;

        //if the currentMinuteNeedle has moved more than 360 degrees , move the hour needle
        if(currentMinuteNeedleDegree>=360){
            currentMinuteNeedleDegree=currentMinuteNeedleDegree%360;
            currentHourNeedleDegree = parseInt(hourNeedle.style.transform.match(numberPattern)[0]);
            currentHourNeedleDegree+=30;
            
            //if the hour needle has moved more than 360 degrees , bring it back to 0
            currentHourNeedleDegree=currentHourNeedleDegree%360;
        }
      }
      

      secondNeedle.style.transform = `rotate(${currentSecondNeedleDegree }deg)`;
      minuteNeedle.style.transform = `rotate(${currentMinuteNeedleDegree }deg)`;
      hourNeedle.style.transform = `rotate(${currentHourNeedleDegree }deg)`;

    }
  }, 1000);
}

init();
