//IMPORT
//=======================================================
import React from "react";
//import { Link } from "react-router-dom"

//CONTENT + EXPORT
//=======================================================

export const SubmitBtn = props => {
  let disable = props.isSubmitDisabled ? "disabled" : "";
    return (
    <button className={"edit-btn px-3 py-2 rounded " + (props.isSubmitDisabled ? "disabled-btn": "")} disabled={disable}>
      {props.children}
    </button>
  );
}