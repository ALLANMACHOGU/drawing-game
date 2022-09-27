import {ctx} from './canvas';
import {makeButton, makeInput} from './controls';

let colorInput = makeInput('color');
colorInput.addEventListener(
  'change',
  function (event) {
    ctx.strokeStyle = colorInput.value;
  }
)

let sizeInput = makeInput('range');
sizeInput.setAttribute('max','50');
sizeInput.setAttribute('min','1')
sizeInput.addEventListener(
  'change',
  function () {
    ctx.lineWidth = sizeInput.valueAsNumber;
  }
)