import {ctx, canvas} from './canvas';
import {makeButton} from './controls';
//Drawing Lines section
let drawLineButton = makeButton('Draw Lines');

let drawingLines = false;
drawLineButton.addEventListener( // listen for an event
  "click",//when the user clicks
  function () {    //do this...
    if (!drawingLines) {
      ctx.beginPath();//start fresh drawing
      canvas.addEventListener('mousemove',DrawOnDrag);
      drawingLines = true;
      drawLineButton.textContent = 'Stop drawing lines';
    } else {
      drawingLines = false;
      canvas.removeEventListener('mousemove',DrawOnDrag);
      drawLineButton.textContent = 'Draw Lines';
    }
  } //close bracket
)


//Clicking Section.
function drawOnDrag (event : MouseEvent) {
    if (event.buttons) {
      ctx.lineTo(event.offsetX, event.offsetY);//where is it relative to the canvas
      ctx.stroke();
    } else {
      ctx.beginPath();
      
    }
}


//Draw on Drag
function DrawOnDrag (event : MouseEvent) {
  if (event.buttons) {
    // Draw when mouse is down
    ctx.lineTo(event.offsetX, event.offsetY);
    ctx.stroke();
  } else {
    // Start new path once mouse is lifted
    ctx.beginPath();
  }
}







