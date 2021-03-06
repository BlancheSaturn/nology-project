/* Refactor calculator code, make functions pure also make eventlistener to switch statement so I can invoke update Screen function invoke only once.
/**********************************************************
 * function to get the operators (+, −, ⨉, ÷, =) on the calculator to work.
 * Operator button is clicked, the input of showValue is converted to a floating-point number
 * and the result is stored in the previousOperand property.
 * The operator property is also set to whatever operator key was clicked, while
 * checkingForSecondOperand is set to true which shows that the previous operand has been entered
 * and whatever number the user enters next will be the current operand.
 * @param {string} nextOperator - the operator that is going to be used for the calculation
 * @param {object} calculator - object storing what we need to make a calculation
 * @returns {undefined}
 *********************************************************/
 const controlOperator = (nextOperator, calculator, calculationFn) => {
    const { previousOperand, showValue, operator } = calculator;
    const currentOperand = parseFloat(showValue);
    
    // nextOperator can be null || undefined
    const operatorToUse = nextOperator || operator;
    
    if (!previousOperand && !isNaN(currentOperand)) {
      calculator.previousOperand = currentOperand;
    } else if (operatorToUse) {
      const calculation = calculationFn(previousOperand, currentOperand, operatorToUse);
      calculator.showValue = `${parseFloat(calculation.toFixed(5))}`;
      calculator.previousOperand = calculation;
    }
    calculator.operator = nextOperator;
    return calculator
  };

   // this if statement is to prevent any calculation until the current operand is entered
  // Example: I can enter the previousOperand and operator + then I cange my mind and enter -
  // instead of clearing the calculator, the first sign + will be replaced with -
  // then when I enter my currentOperand I will get a result for the - operator