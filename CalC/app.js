// Define global variables to store the current expression and whether an operator has been used.
let expression = "";
let operatorUsed = false;

// Function to append values to the display (calculator screen).
function appendToDisplay(value) {
  // Check if an operator has been used and the current input is also an operator.
  // If true, do not allow consecutive operators to be added to the expression.
  if (operatorUsed && isNaN(value)) {
    // If an operator has been used and the current input is also an operator, do nothing.
    return;
  }

  // Append the value to the expression.
  expression += value;

  // Set operatorUsed to true if the current input is an operator, else set it to false.
  operatorUsed = isNaN(value) ? true : false;

  // Update the display (calculator screen) with the current expression.
  document.getElementById("screen").value = expression;
}

// Function to clear the calculator's display and reset operatorUsed.
function clearDisplay() {
  expression = "";
  operatorUsed = false;
  document.getElementById("screen").value = expression;
}

// function to delete just one position of the number
function deleteDisplay(){
  expression = expression.slice(0,-1);
  document.getElementById("screen").value = expression;
}

// Function to calculate the result of the expression.
function calculateResult() {
  try {
    // Use the eval() function to evaluate the expression and get the result.
    const result = eval(expression);

    // Convert the result to a string and update the expression and display with it.
    expression = result.toString();
    document.getElementById("screen").value = result;

    // Reset operatorUsed after the calculation.
    operatorUsed = false;
  } catch (error) {
    // If there's an error during evaluation (e.g., invalid expression), handle it.
    expression = "";
    operatorUsed = false;
    document.getElementById("screen").value = "Error";
  }
}
