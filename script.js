// Append value to the calculator display
function appendValue(value) {
    const resultField = document.getElementById('result');
    resultField.value += value;
}

// Clear the calculator display
function clearResult() {
    document.getElementById('result').value = '';
}

// Calculate the result
function calculateResult() {
    const resultField = document.getElementById('result');
    try {
        resultField.value = eval(resultField.value); // Evaluate the expression
    } catch (error) {
        resultField.value = 'Error'; // Handle invalid expressions
    }
}