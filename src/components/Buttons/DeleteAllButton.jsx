import React from "react";
import { ACTIONS } from "../../assets/js/Actions";

const DeleteAllButton = ({ dispatch }) => {
  return (
    <button
      className="span--two delete"
      onClick={() => dispatch({ type: ACTIONS.CLEAR })}
    >
      AC
    </button>
  );
};

export default DeleteAllButton;
