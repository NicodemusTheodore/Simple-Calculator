export function evaluate({ currentOperand, previousOperand, operation }) {
  const prev = parseFloat(previousOperand);
  const curr = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(curr)) {
    return "";
  }
  let computation;
  switch (operation) {
    case "+":
      computation = prev + curr;
      break;
    case "-":
      computation = prev - curr;
      break;
    case "×":
      computation = prev * curr;
      break;
    case "÷":
      computation = prev / curr;
      break;
    default:
      break;
  }

  return computation.toString();
}
