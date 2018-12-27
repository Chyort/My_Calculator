$(document).ready(init);

    function init(){
        attachEventHandlers();
    }

    function attachEventHandlers(){
        $('.number').click(calculator.doMath);
        $('.operator').click(calculator.doMath);
    }

    function CalculatorApp(value, inputArray){ //create space for value and inputArray
        this.value = value;
        this.inputArray = inputArray;

        value = null;
        inputArray = [];

        CalculatorApp.storedOperators = {
            '+':'+',
            '-':'-',
            '*':'*',
            '/':'/'
        }

        CalculatorApp.storedNumbers = {
            '1':1,
            '2':2,
            '3':3,
            '4':4,
            '5':5,
            '6':6,
            '7':7,
            '8':8,
            '9':9,
            '0':0
        }

        console.log('inputArray: ', inputArray, 'value: ', value);

        this.doMath = function(num1, num2, operator){ //assign value to appropriate parameter
            value = $(this).text();
            this.num1 = num1;
            this.num2 = num2;
            this.operator = operator;

            if(value in CalculatorApp.storedNumbers){ //check for value in storedNumbers
                if(isNaN(inputArray[inputArray.length - 1]) && inputArray.length !== 0){//if last item if inputArray is not a number
                    num2 = value;
                    inputArray.push(num2);
                    $('.calculatorScreen').val(num2);
                    console.log('num2: ', num2);
                }
                if(inputArray.length === 0 || !isNaN(inputArray[inputArray.length - 1]) && num2 === undefined){ //if inputArray is a number
                    num1 = value;
                    inputArray.push(num1);

                    if(inputArray.length >= 1){
                        let newNum = inputArray.join("");
                        num1 = parseFloat(newNum);
                    }
                }
                
                let displayArray = inputArray.join("");
                $('.calculatorScreen').val(displayArray);
                console.log('inputArray: ', inputArray, "num1: ", num1);

            } else if (value in CalculatorApp.storedOperators){//check for value in storedOperators
                operator = value;
                inputArray.push(operator);

                if(isNaN(inputArray[inputArray.length - 1])){//check if last item of inputArray is an operator
                    $('.calculatorScreen').val(operator);
                    console.log('inputArray:', inputArray);
                }
            }
        }
    }

const calculator = new CalculatorApp();
console.log('calculator: ', calculator);