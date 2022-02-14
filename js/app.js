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
  let originalResult = (Number(x.value) / Number(y.value)).toFixed(5);
  if ((Number.isInteger(originalResult) == false) && (originalResult > 1)) {
    let remainder = Number(x.value) % Number(y.value)
    let noOfTimes = (Number(x.value) - remainder) / Number(y.value)
    let result = `${noOfTimes} r ${remainder} | ${originalResult}`;
    displayResult(result);
  } else {
    displayResult(originalResult);
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