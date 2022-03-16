import {hideDrawer} from "./themeDrawer.js";

function showOverlay(){
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.display="block";
}

function hideOverlay(){
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.style.display="none";
}

function addListenerToOverlay(){
    let overlay = document.getElementsByClassName("overlay")[0];
    overlay.addEventListener("click",()=>{
        hideDrawer();
        hideOverlay();
    })
}

export {showOverlay, hideOverlay,addListenerToOverlay};
