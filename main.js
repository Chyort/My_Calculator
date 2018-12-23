$(document).ready(initializeApp);

function initializeApp(){
    attachClickHandlers();
}

function attachClickHandlers(){
    $('button').on('click', DoMath);
}

function DoMath(num1, num2, operator){
    this.num1 = num1;
    this.num2 = num2;
    this.operator = operator;
}