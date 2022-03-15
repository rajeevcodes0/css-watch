function addListenersToGuitars() {
  let trackOne = document.getElementById("neon-guitar-one-track");
  let guitarOne = document.getElementById("neon-guitar-one");
  let musicIconOne = document.getElementById("neon-guitar-one-music-icon");

  let trackTwo = document.getElementById("neon-guitar-two-track");
  let guitarTwo = document.getElementById("neon-guitar-two");
  let musicIconTwo = document.getElementById("neon-guitar-two-music-icon");

  let saxophoneTrackOne = document.getElementById("neon-saxophone-one-track");
  let saxophoneOne = document.getElementById("neon-saxophone-one");
  let saxophoneMusicIconOne = document.getElementById("neon-saxophone-one-music-icon");

  //hide both icons
  musicIconOne.style.opacity = "0";
  musicIconTwo.style.opacity = "0";
  saxophoneMusicIconOne.style.opacity = "0";

  guitarOne.addEventListener("click", () => {
    //if the track is not paused then its playing
    if (!trackOne.paused) {
      //then user wants to pause the song, so pause it and return
      trackOne.pause();
      //hide the music icon as well
      musicIconOne.style.opacity = "0";
      return;
    }
    musicIconOne.style.opacity = "1";
    musicIconTwo.style.opacity = "0";
    saxophoneMusicIconOne.style.opacity="0";

    trackTwo.pause();
    trackOne.play();
    saxophoneTrackOne.pause();
  });

  guitarTwo.addEventListener("click", () => {
    //if the track is not paused then its playing
    if (!trackTwo.paused) {
      //then user wants to pause the song, so pause it and return
      trackTwo.pause();
      musicIconTwo.style.opacity = "0";
      return;
    }

    musicIconOne.style.opacity = "0";
    musicIconTwo.style.opacity = "1";
    saxophoneMusicIconOne.style.opacity="0";

    trackOne.pause();
    trackTwo.play();
    saxophoneTrackOne.pause();
  });

  saxophoneOne.addEventListener("click",()=>{
    //if the track is not paused then its playing
    if (!saxophoneTrackOne.paused) {
      //then user wants to pause the song, so pause it and return
      saxophoneTrackOne.pause();
      //musicIconTwo.style.opacity = "0";
      return;
    }

    //show the 
    musicIconOne.style.opacity = "0";
    musicIconTwo.style.opacity = "0";
    saxophoneMusicIconOne.style.opacity="1";

    //pause other instruments
    trackOne.pause();
    trackTwo.pause();
    saxophoneTrackOne.play();
  })
}


export default addListenersToGuitars;