import React from "react";
import { ACTIONS } from "../../assets/js/Actions";
import { IoBackspaceSharp } from "react-icons/io5";

const DeleteButton = ({ dispatch }) => {
  return (
    <button
      className="delete"
      onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
    >
      <IoBackspaceSharp />
    </button>
  );
};

export default DeleteButton;
