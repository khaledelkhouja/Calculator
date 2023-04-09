//adduction 
function add(a,b) {
    return a+b;
}
// subtraction 
function subtract(a,b){
    return a-b;
}
// multiply
function multiply(a,b){
    return a*b;
}
// division
function divide(a,b){
    return a/b;
}
// operation variable
let firstNumber;
let secondNumber;
let operator;
// Operate function
function operate(a,o,b){
    switch(o){
        case "+" :
            return add(a,b);
        case "-" :
            return subtract(a,b);
        case "*" :
            return multiply(a,b);
        case "/" :
            return divide(a,b);
    }
}