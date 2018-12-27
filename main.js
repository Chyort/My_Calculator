$(document).ready(init);

    function init(){
        attachEventHandlers();
    }

    function attachEventHandlers(){
        $('.number').click(calculator.doMath);
        $('.operator').click(calculator.doMath);
    }

    function CalculatorApp(value, inputArray){
        this.value = value;
        this.inputArray = inputArray;

        value = null;
        inputArray = [];

        console.log('inputArray: ', inputArray, 'value: ', value);

        this.doMath = function(num1, num2, operator){
            value = $(this).text();
            this.num1 = num1;
            this.num2 = num2;
            this.operator = operator;

            if(inputArray.length === 0){
                num1 = value;
                inputArray.push(value);
                console.log('inputArray: ', inputArray);
                $('.calculatorScreen').val(num1);
                console.log('num1: ', num1);
            }
        }
    }

const calculator = new CalculatorApp();
console.log('calculator: ', calculator);