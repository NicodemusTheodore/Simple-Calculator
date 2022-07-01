import "./assets/css/style.css";
import { useReducer } from "react";
import { reducer } from "./assets/js/Reducer";
import DigitButton from "./components/Buttons/DigitButton";
import OperationButton from "./components/Buttons/OperationButton";
import DeleteButton from "./components/Buttons/DeleteButton";
import DeleteAllButton from "./components/Buttons/DeleteAllButton";
import EvaluateButton from "./components/Buttons/EvaluateButton";
import Output from "./components/Output/Output";

function App() {
  // React Hooks
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="container">
      <div className="calculator--grid">
        {/* Output Field */}
        <Output
          currentOperand={currentOperand}
          previousOperand={previousOperand}
          operation={operation}
        />

        {/* Delete All Button */}
        <DeleteAllButton dispatch={dispatch} />

        {/* Delete One Button */}
        <DeleteButton dispatch={dispatch} />

        {/* Operation and Digit Buttons */}
        <OperationButton operation="÷" dispatch={dispatch} />
        <DigitButton digit="1" dispatch={dispatch} />
        <DigitButton digit="2" dispatch={dispatch} />
        <DigitButton digit="3" dispatch={dispatch} />
        <OperationButton operation="×" dispatch={dispatch} />
        <DigitButton digit="4" dispatch={dispatch} />
        <DigitButton digit="5" dispatch={dispatch} />
        <DigitButton digit="6" dispatch={dispatch} />
        <OperationButton operation="-" dispatch={dispatch} />
        <DigitButton digit="7" dispatch={dispatch} />
        <DigitButton digit="8" dispatch={dispatch} />
        <DigitButton digit="9" dispatch={dispatch} />
        <OperationButton operation="+" dispatch={dispatch} />
        <DigitButton digit="." dispatch={dispatch} />
        <DigitButton digit="0" dispatch={dispatch} />

        {/* Evaluate Button */}
        <EvaluateButton dispatch={dispatch} />
      </div>
    </div>
  );
}

export default App;
