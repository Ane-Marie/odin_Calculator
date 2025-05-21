let firstOperand = "";
let secondOperand = "";
let operator = "";
let result = "";

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;
    
// function for basic math operators
function operate(firstOperand, operator, secondOperand) {
    let result;
    switch(operator) {
        case "+": 
            result = add(firstOperand, secondOperand);
            break;
        case "-":
            result = substract(firstOperand, secondOperand);
            break;
        case "*":
            result =  multiply(firstOperand, secondOperand);
            break;
        case "/":
            result = divide(firstOperand, secondOperand);
            break
    }
    return result;
}

// callbacks / event listeners:

let display = document.querySelector("#display");
function populateDisplay() {
    if (firstOperand != ""){
        display.textContent = firstOperand;
    }
    if (operator != ""){
        display.textContent += operator;
    }
    if (secondOperand != ""){
        display.textContent += secondOperand;
    }   
};    

let operands = document.querySelectorAll(".operand");
operands.forEach((operand) => { 
    operand.addEventListener("click", () => {
        if(!operator){
            firstOperand += operand.textContent;
            console.log(firstOperand);
        }
        else {
            secondOperand += operand.textContent;
            console.log(secondOperand);
        }
        populateDisplay();
    });    
});

let operators = document.querySelectorAll(".operator");
operators.forEach((inputOperator) => {
    inputOperator.addEventListener("click", () => {
        if(!operator && firstOperand) {  
            operator = inputOperator.textContent;
            populateDisplay();
        }

        else if (firstOperand && operator && secondOperand) {
            let secondOperator = inputOperator.textContent;
            firstOperand = parseFloat(firstOperand);
            secondOperand = parseFloat(secondOperand);
            result = operate(firstOperand, operator, secondOperand);
            firstOperand = result;
            secondOperand = "";
            operator = secondOperator;
            populateDisplay();
    }
    });
});

let equalsTo = document.querySelector("#equalsTo");
equalsTo.addEventListener("click", () => {
    if(operator === "/" && secondOperand === "0") {
        display.textContent = "Nahh bro!";
        firstOperand = "";
        operator = "";
        secondOperand = "";
        result = "";
        }
    else if (firstOperand != "" && operator != "" && secondOperand != "") {
        firstOperand = parseFloat(firstOperand);
        secondOperand = parseFloat(secondOperand);
        result = operate(firstOperand, operator, secondOperand);
        secondOperand = "";
        operator = "";
        firstOperand = result;
        populateDisplay();
    }
});

let decimal = document.querySelector("#decimal");
decimal.addEventListener("click", () => {
    if(!secondOperand) {
        firstOperand += ".";
    }
    if(secondOperand) {
        secondOperand += ".";   
    }
    populateDisplay();
});

let deleteLastEntry = document.querySelector("#delete");
deleteLastEntry.addEventListener("click", () => {
    display.textContent = display.textContent.slice(0, -1);
}); 

let allClear = document.querySelector("#clear");
allClear.addEventListener("click", () => {
    display.textContent = "";
    firstOperand = "";
    secondOperand = "";
    operator = "";
    result = "";
    
});
