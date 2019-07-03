//IMPORT
//=======================================================
import React from "react";
//import { Link } from "react-router-dom"

//CONTENT + EXPORT
//=======================================================

export const SubmitBtn = props => {
  let disable = props.isSubmitDisabled ? "disabled" : "";
    return (
    <input type="submit" className={"edit-btn px-3 py-2 rounded " + (props.isSubmitDisabled ? "disabled-btn": "")} disabled={disable} value="Submit" />
  );
}