function insertBricks(){
  let bricksContainer = document.getElementsByClassName("bricks-container")[0];

  let evenRow = true;
  for(let i=0;i<40;i++){
    if(evenRow){
      let newRow = document.createElement("div");

      bricksContainer.appendChild(newRow);

      newRow.className="brick-row-even";

      for(let j=0;j<30;j++){
        let newBrick = document.createElement("div");
        newBrick.className="brick";
        let randomNumber = Math.random()*10;
        if(randomNumber<=2){
          newBrick.style.backgroundColor="#0e0e0e"
        }
        newRow.appendChild(newBrick);
      }
      evenRow=false
    }else{
      let newRow = document.createElement("div");

      bricksContainer.appendChild(newRow);

      newRow.className="brick-row-odd";

      for(let j=0;j<30;j++){
        let newBrick = document.createElement("div");
        newBrick.className="brick";
        newRow.appendChild(newBrick);
      }

      evenRow=true;
    }
   

  }
}

function addListenersToGuitars(){
  let trackOne = document.getElementById("neon-guitar-one-track");
  let guitarOne = document.getElementById("neon-guitar-one");
  let musicIconOne = document.getElementById("neon-guitar-one-music-icon");
  let trackTwo = document.getElementById("neon-guitar-two-track");
  let guitarTwo = document.getElementById("neon-guitar-two");
  let musicIconTwo = document.getElementById("neon-guitar-two-music-icon");

  //hide both icons
  musicIconOne.style.opacity="0";
  musicIconTwo.style.opacity="0";

  guitarOne.addEventListener("click",()=>{
    //if the track is not paused then its playing
    if(!trackOne.paused){
      //then user wants to pause the song, so pause it and return
      trackOne.pause();
      //hide the music icon as well
      musicIconOne.style.opacity="0";
      return;
    }
    musicIconOne.style.opacity="1";
    musicIconTwo.style.opacity="0";
    trackTwo.pause();
    trackOne.play();
  })

  guitarTwo.addEventListener("click",()=>{

    //if the track is not paused then its playing
    if(!trackTwo.paused){
      //then user wants to pause the song, so pause it and return
      trackTwo.pause();
      musicIconTwo.style.opacity="0";
      return;
    }

    musicIconOne.style.opacity="0";
    musicIconTwo.style.opacity="1";
    trackOne.pause();
    trackTwo.play();
  })
}

function init() {
  insertBricks();
  addListenersToGuitars();
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
