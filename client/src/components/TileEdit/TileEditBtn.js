//IMPORT
//=======================================================
import React from "react";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================

const FormBtn = props =>
  <button {...props}>
    {props.children}
  </button>;

//EXPORT
//=======================================================
export default FormBtn;