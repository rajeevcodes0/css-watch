function addListenersToGuitars() {
  let trackOne = document.getElementById("neon-guitar-one-track");
  let guitarOne = document.getElementById("neon-guitar-one");
  let musicIconOne = document.getElementById("neon-guitar-one-music-icon");
  let trackTwo = document.getElementById("neon-guitar-two-track");
  let guitarTwo = document.getElementById("neon-guitar-two");
  let musicIconTwo = document.getElementById("neon-guitar-two-music-icon");

  //hide both icons
  musicIconOne.style.opacity = "0";
  musicIconTwo.style.opacity = "0";

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
    trackTwo.pause();
    trackOne.play();
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
    trackOne.pause();
    trackTwo.play();
  });
}


export default addListenersToGuitars;