import {showOverlay} from "./overlayHandler.js";
import {changeTheme} from "./changeTheme.js"

function openDrawer(){
    let drawer = document.getElementsByClassName("theme-drawer")[0];
    showOverlay();
    drawer.className="theme-drawer theme-drawer-open";
}

function hideDrawer(){
    let drawer = document.getElementsByClassName("theme-drawer")[0];
    drawer.className="theme-drawer theme-drawer-closed";
}

function addListenersToDrawer(){
    let drawer = document.getElementsByClassName("theme-drawer")[0];
    drawer.addEventListener("click",openDrawer);

    //add listener to theme buttons
    let themeButtons = document.getElementsByClassName("theme-button");
    
    Array.from(themeButtons).forEach((button)=>{
        button.addEventListener("click",changeTheme);
    })
}


export {addListenersToDrawer,hideDrawer};