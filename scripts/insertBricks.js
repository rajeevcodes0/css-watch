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

  export default insertBricks;