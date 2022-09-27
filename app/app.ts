import {ctx, canvas} from './canvas';
import {makeButton} from './controls';
import './settings';
import './lineDrawing';
import './background';
import './drawboxman';

//Create Buttons
let drawCircleButton = makeButton("Draw Semicircle");
let circleButton = makeButton("Draw Circle")
let clearScreenButton = makeButton('Clear Screen');
let drawInBlueButton = makeButton('Blue');
let makeBoxman = makeButton("Boxman");


//Circle button section
drawCircleButton.addEventListener(
  "click",
  function () {
    ctx.beginPath();
    ctx.arc(300,300,100,0,Math.PI);//center where the user clicks
    ctx.fill();
    ctx.stroke();
  }
)




//random circle button
circleButton.addEventListener(
  // listen for event
  "click", //when they click
  function () { // do this function
    ctx.beginPath();
    ctx.arc(
      Math.random()*450,
      Math.random()*450,
      50,
      0,
      Math.PI*2);
    ctx.stroke();
  } //end of fuction
)

//color section
//ctx.fillStyle = "red"
//ctx.strokeStyle = "blue"
//ctx.lineWidth = 15

//Clearing lines section
clearScreenButton.addEventListener(
  'click',
  function () {
    ctx.clearRect(0,0, canvas.width, canvas.height);
  }
);

//Boxmansection
makeBoxman.addEventListener(
  'click',
   function drawBoxman() {
     ctx.strokeStyle = 'black';
    



//Draw a Square Head
let rectanglex=200;
let rectangley=100;
let rectanglew=75;
let rectangleh=75;
ctx.strokeRect(rectanglex, rectangley, rectanglew, rectangleh);
//The Eyes
ctx.strokeRect(215, 120, 10, 10);//left eye
ctx.strokeRect(255, 120, 10, 10);//right eye
//The Mouth
let mouthx=215;
let mouthy=160;
let mouthx2=260;
ctx.beginPath();
ctx.moveTo(mouthx, mouthy);
ctx.lineTo(mouthx2,mouthy);
ctx.closePath();
ctx.stroke();
  //The Torso
let torsox=175;
let torsoy=175;
let torsow=125;
let torsoh=125;
ctx.strokeRect(torsox, torsoy, torsow, torsoh);
//The Legs
let leftlegx=175;
let leftlegy=300;
let leftlegw=50;
let leftlegh=125;
ctx.strokeRect(175, 300, 50, 125);//left leg
let rightlegx=250;
let rightlegy=300;
let rightlegw=50;
let rightlegh=125;
ctx.strokeRect(rightlegx, rightlegy, rightlegw, rightlegh);//right leg
//The Hands
//variables left hand
let lefthandx=175;
let lefthandy=175;
let lefthandx2=100;
let lefthandy2=260;
//left hand
ctx.beginPath();
ctx.moveTo(lefthandx, lefthandy);
ctx.lineTo(lefthandx2, lefthandy2);
ctx.stroke();
ctx.moveTo(100, 260);
ctx.lineTo(125, 285);
ctx.stroke();
ctx.moveTo(125, 285);
ctx.lineTo(175, 220);
ctx.stroke();
ctx.closePath();
//variables right hand
let righthandx=300;
let righthandy=175;
let righthandx2=375;
let righthandy2=260;
//right hand
ctx.beginPath();
ctx.moveTo(righthandx, righthandy);
ctx.lineTo(righthandx2, righthandy2);
ctx.stroke();
ctx.moveTo(375, 260);
ctx.lineTo(350, 285)
ctx.stroke();
ctx.moveTo(350, 285);
ctx.lineTo(300, 220);
ctx.stroke();
ctx.closePath();
}
);




//IMPORTANT NOTE: the code debugger can help you advance in finding where the problem in your code is if javascript can't spot it. Just click on the top right section that is next to the tool box, where you can see the real page outside of your programming that the user sees, through debugger with semicolon obviously. Then when you're on the page, you can inspect to see where your problems are at.



//color blue
ctx.strokeStyle = 'blue';
//color blue
drawInBlueButton.addEventListener(
  'click',
  function () {ctx.strokeStyle = 'blue';}
);

ctx.strokeStyle = 'red';
//make red button
makeButton('Red')
  .addEventListener(
    'click',
    function () {ctx.strokeStyle = 'red'}
  );

