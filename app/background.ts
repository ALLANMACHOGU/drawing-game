import {ctx, canvas} from './canvas';
import {makeButton} from './controls';

//eagle background button
makeButton(
  'Eagle BG'
).addEventListener(
  "click",
  function () {
    canvas.style.backgroundImage = "url(eagle.webp)";
    canvas.style.backgroundSize = 'cover';
  }
)

//clear blue button background/transparent
makeButton(
  'Clear BG'
).addEventListener(
  "click",
  function () {
    canvas.style.backgroundColor = 'transparent';
    canvas.style.backgroundImage = '';
  }
)


makeButton(
  'Meadow BG'
).addEventListener(
  "click",
  function() {
    canvas.style.backgroundImage = 'url(meadow.jpeg)';
    canvas.style.backgroundSize = 'cover';
  }
)

