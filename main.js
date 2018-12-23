$(document).ready(initializeApp);
let inputArray = [];
function initializeApp(){
    attachClickHandlers();
}

function attachClickHandlers(){
    $('.number').on('click', doMath);
    $('.operator').on('click', doMath);
    $('.equalSign').on('click', doMath);
    $('.clear').on('click', resetApp);
}

function resetApp(){
    inputArray = [];
    $('.calculatorScreen').val(0);
    console.log('inputArray: ', inputArray);
}

function doMath (num1, num2, operator){
    
    let input = $(this).text();
    if(inputArray.length === 0){
        num1 = input;
        inputArray.push(num1);
        $('.calculatorScreen').val(num1);
        console.log("num1: ", num1);
    } else if(inputArray.length > 0 && inputArray.length <= 2){
        operator = input;
        inputArray.push(operator);
        $('.calculatorScreen').val(operator);
        console.log("operator: ", operator);
    } else if(inputArray.length === 2){
        num2 = input;
        inputArray.push(num2);
        $('.calculatorScreen').val(num2);
    }
    else if(inputArray.length === 3){
        let num1 = parseInt(inputArray[0]);
        let num2 = parseInt(inputArray[2]);
        let operator = inputArray[1];
        switch(operator){
            case '+':
                result = num1 + num2;
                $('.calculatorScreen').val(result);
                break;
            case '-':
                result = num1 - num2;
                $('.calculatorScreen').val(result);
                break;
            case '*':
                result = num1 * num2;
                $('.calculatorScreen').val(result);
                break;
            case '/':
                result = num1 / num2;
                $('.calculatorScreen').val(result);
        }
        console.log(result);
    }
}