import React from "react";
import { ACTIONS } from "../../assets/js/Actions";

const EvaluateButton = ({ dispatch }) => {
  return (
    <button
      className="span--two equal"
      onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
    >
      =
    </button>
  );
};

export default EvaluateButton;
