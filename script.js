let currentInput = '';
let operator = '';
let firstNumber = '';

function appendNumber(number) {
    currentInput += number;
    document.getElementById('display').value = currentInput;
}

function operatorClick(op) {
    if (firstNumber === '') {
        firstNumber = currentInput;
        operator = op;
        currentInput = '';
    }
}

function calculateResult() {
    if (firstNumber !== '' && operator !== '') {
        const secondNumber = currentInput;
        let result;

        switch (operator) {
            case '+':
                result = parseFloat(firstNumber) + parseFloat(secondNumber);
                break;
            case '-':
                result = parseFloat(firstNumber) - parseFloat(secondNumber);
                break;
            case '*':
                result = parseFloat(firstNumber) * parseFloat(secondNumber);
                break;
            case '/':
                result = parseFloat(firstNumber) / parseFloat(secondNumber);
                break;
        }

        document.getElementById('display').value = result;
        firstNumber = '';
        currentInput = result.toString();
        operator = '';
    }
}

function clearDisplay() {
    currentInput = '';
    firstNumber = '';
    operator = '';
    document.getElementById('display').value = '';
}
