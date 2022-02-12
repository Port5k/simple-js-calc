//LOGIC

//VARIABLES
let x = document.querySelector('#firstNumber');
let y = document.querySelector('#secondNumber');
let display = document.querySelector('.screen');


//CONTROL
let add = () => {
  let result = Number(x.value) + Number(y.value);
  displayResult(result);
}

let subtract = () => {
  let result = Number(x.value) - Number(y.value);
  displayResult(result);
}

let multiply = () => {
  let result = Number(x.value) * Number(y.value);
  displayResult(result);
}

let divide = () => {
  let result = Number(x.value) / Number(y.value);
  if ((Number.isInteger(result) == false) && (result > 1)) {
    let remainder = Number(x.value) % Number(y.value)
    let noOfTimes = (Number(x.value) - remainder) / Number(y.value)
    result = `${noOfTimes} r ${remainder}`;
    displayResult(result);
  } else {
    displayResult(result);
  }
}

//LISTENERS
document.querySelector('.add').addEventListener('click', add);
document.querySelector('.subtract').addEventListener('click', subtract);
document.querySelector('.multiply').addEventListener('click', multiply);
document.querySelector('.divide').addEventListener('click', divide);


//DISPLAY
let displayResult = (result) => {
  display.textContent = result;
}