import React from "react";

export const SubmitBtn = props => {
  let disable = props.isSubmitDisabled ? "disabled" : "";
    return (
    <input type="submit" className={"edit-btn px-3 py-2 cursor-pointer rounded " + (props.isSubmitDisabled ? "disabled-btn": "")} disabled={disable} value="Submit" />
  );
} 