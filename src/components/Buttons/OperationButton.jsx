import React from "react";
import { ACTIONS } from "../../assets/js/Actions";

const DigitButton = ({ dispatch, operation }) => {
  return (
    <button
      className="operation"
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })
      }
    >
      {operation}
    </button>
  );
};

export default DigitButton;
