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

let leftValue = '';
let rightValue = '0';
let operator = null;
let buttonArray = {};

const BUTTON_VALUES = [
    'AC','DEL','+/-','+',
    '7','8','9','-',
    '4','5','6','*',
    '1','2','3','/',
    '0','.','_','='
];

// get string return string
function operate(leftValue, operator, rightValue){
    leftValue = +leftValue;
    rightValue = +rightValue;
    switch(operator){
        case '+':
            return `${add(leftValue, rightValue)}`;
        case '-':
            return `${subtract(leftValue, rightValue)}`;
        case '*':
            return `${multiply(leftValue, rightValue)}`;
        case '/':
            return `${divide(leftValue, rightValue)}`;
        default:
            return 'ERROR';
    }
}

function createButton(buttonType){
    const button = document.createElement('button');
    button.type = "button";
    button.classList.add("btn");
    button.textContent = buttonType;
    return button;
}

function updateDisplay(){
    display.textContent = rightValue;
}

function updateValue(c){
    if(rightValue.at(0) === '0'){
        rightValue = c;
    }
    else{
        rightValue += c;
    }
    console.log(`left: ${leftValue}, op: ${operator}, right: ${rightValue}`);
}

function deleteFromValue(){
    if(rightValue.length === 2 && rightValue.at(0) === '-'){
            rightValue ='0';
    }
    else if(rightValue.length > 1){
        rightValue = rightValue.slice(0, -1);
    }
    else{
        rightValue = '0';
    }
}

function resetAll(){
    leftValue = '';
    rightValue = '0';
    operator = null;
}

function changeSign(){
    if(rightValue.at(0) === '-'){
        rightValue = rightValue.slice(1);
    }
    else if(rightValue.at(0) !== '0'){
        rightValue = '-' + rightValue;
    }
}

function updateOperator(newOperator){
    if(!leftValue){
        leftValue = (rightValue) ? rightValue : leftValue;
        rightValue = '';
    }
    else if(rightValue && operator !== '='){
        rightValue = operate(leftValue, operator, rightValue);
        updateDisplay();
        if (rightValue === 'ERROR'){
            resetAll();
        }
        else{
            leftValue = rightValue;
            rightValue = '';
        };
    }
    operator = newOperator;
    console.log(`left: ${leftValue}, op: ${operator}, right: ${rightValue}`);
}

const body = document.querySelector("body");

const calculator = document.createElement("div");
calculator.classList.add("calculator");

const display = document.createElement("div");
display.classList.add("display");

const buttons = document.createElement("div");
buttons.classList.add("buttons");

BUTTON_VALUES.forEach(value => {
    newButton = createButton(value);
    buttons.appendChild(newButton);
    buttonArray[value] = newButton;
});

for(let i = 0; i <= 9; i++){
    console.log(buttonArray[i])
    buttonArray[i].addEventListener("click", () => {
        updateValue(`${i}`);
        updateDisplay();
    });
}

buttonArray.DEL.addEventListener("click", () => {
    deleteFromValue();
    updateDisplay();
});

buttonArray.AC.addEventListener("click", () => {
    resetAll();
    updateDisplay();
});

buttonArray['+/-'].addEventListener("click", () => {
    changeSign();
    updateDisplay();
});

buttonArray['+'].addEventListener("click", () => updateOperator('+'));
buttonArray['-'].addEventListener("click", () => updateOperator('-'));
buttonArray['*'].addEventListener("click", () => updateOperator('*'));
buttonArray['/'].addEventListener("click", () => updateOperator('/'));
buttonArray['='].addEventListener("click", () => updateOperator('='));

calculator.appendChild(display);
calculator.appendChild(buttons);

body.appendChild(calculator);

//initial display state
updateDisplay();