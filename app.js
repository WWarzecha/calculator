function add(a, b){
    return a + b;
}

function subtract(a, b){
    return a - b;
}

function multiply(a, b){
    return a * b;
}

function divide(a, b){
    return (b === 0) ? 'ERROR' : a / b;
}

let leftValue = '0';
let rightValue = '0';
let operator = '';

const BUTTON_VALUES = [
    'AC','DEL','_','+',
    '7','8','9','-',
    '4','5','6','*',
    '1','2','3','+',
    '0','.','_','='
];

function operate(leftValue, operator, rightValue){
    leftValue = +leftValue;
    rightValue = +rightValue;
    switch(operator){
        case '+':
            return add(leftValue, rightValue);
        case '-':
            return subtract(leftValue, rightValue);
        case '*':
            return multiply(leftValue, rightValue);
        case '/':
            return divide(leftValue, rightValue);
        default:
            return 'ERROR';
    }
}

function createButton(buttonType){
    const button = document.createElement('div');
    button.classList.add("btn");
    button.textContent = buttonType;
    return button;
}

const body = document.querySelector("body");

const calculator = document.createElement("div");
calculator.classList.add("calculator");

const display = document.createElement("div");
display.classList.add("display");

display.textContent = "Some crazy 1 + 1"


const buttons = document.createElement("div");
buttons.classList.add("buttons");

// for(let i = 0; i < 20; i++){
//     buttons.appendChild(createButton());
// };

BUTTON_VALUES.forEach(value => {
    buttons.appendChild(createButton(value));
});


calculator.appendChild(display);
calculator.appendChild(buttons);

body.appendChild(calculator);
