$(document).ready(init);

    function init(){
        attachEventHandlers();
    }

    function attachEventHandlers(){
        $('.clear').click(calculator.clearArray);
        $('.number').click(calculator.doMath);
        $('.operator').click(calculator.doMath);
        $('.equalSign').click(calculator.evaluate);
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

        this.clearArray = function(){
            value = null;
            inputArray = [];
            $('.calculatorScreen').val(0);
            console.log('inputArray: ', inputArray, 'value: ', value);
        }

        this.doMath = function(num1, num2, operator){ //assign value to appropriate parameter
            value = $(this).text();
            this.num1 = num1;
            this.num2 = num2;
            this.operator = operator;

            if(value in CalculatorApp.storedNumbers){ //check for value in storedNumbers
                if(isNaN(inputArray[inputArray.length - 1]) && inputArray.length !== 0 || isNaN(inputArray[1]) && inputArray.length > 1){//if last item if inputArray is not a number OR second item in array is NaN -----NUM2
                    num2 = value;
                    inputArray.push(num2);
                    $('.calculatorScreen').val(num2);
                    console.log('num2: ', num2);
                }
                if(inputArray.length === 0 || !isNaN(inputArray[inputArray.length - 1]) && num2 === undefined){ //if inputArray is a number -----NUM1
                    num1 = value;
                    inputArray.push(num1);
                    console.log('num1: ', num1);

                    if(inputArray.length >= 1){
                        let newValue = inputArray.join("");
                        num1 = parseFloat(newValue);
                    }
                }

                let displayArray = inputArray.join("");
                $('.calculatorScreen').val(displayArray);
                console.log('inputArray: ', inputArray);

            } else if (value in CalculatorApp.storedOperators){//check for value in storedOperators ------OPERATOR
                let newValue = inputArray.join("");
                num1 = parseFloat(newValue);
                operator = value;
                inputArray.push(operator);

                if(isNaN(inputArray[inputArray.length - 1])){//check if last item of inputArray is an operator
                    
                    inputArray.splice(0, inputArray.length - 1, num1);
                    let newArray = inputArray.join("");
                    $('.calculatorScreen').val(newArray);
                    console.log('newArray:', newArray);
                }
            }
        }
        this.evaluate = function(){
            let newValue = [];
            let value = null;
            let itemsToRemove = 0;
            let operator = inputArray[1];
            let num1 = inputArray[0];
            let num2 = calculator.num2

            for(var inputIndex = 0; inputIndex <= inputArray.length - 1; inputIndex++){

                if(typeof inputArray[inputIndex] === "string" && !isNaN(inputArray[inputIndex])){
                    newValue.push(inputArray[inputIndex]);
                    itemsToRemove = itemsToRemove + 1;          //add count for numbers to remove for splice

                    if(inputIndex === inputArray.length - 1){
                        newValue = newValue.join("");
                        num2 = parseFloat(newValue);
                        inputArray.splice(2, itemsToRemove, num2);
                        console.log('inputArray: ', inputArray);
                    }
                }
            }
            switch(operator){
                case '+':
                    value = num1 + num2;
                    break;
                case '-':
                    value = num1 - num2;
                    break;
                case '*':
                case 'x':
                case 'X':
                    value = num1 * num2;
                    break;
                case '/':
                    value = num1 / num2;
            }
            num1 = value;
            inputArray = [value];
            $('.calculatorScreen').val(value);
            console.log('typeof inputArray: ', typeof inputArray[2]);
            console.log('= : clicked', 'inputArray: ', inputArray);
        }
    }

const calculator = new CalculatorApp();
console.log('calculator: ', calculator);