//IMPORT
//=======================================================
import React from "react";
//import { Link } from "react-router-dom"

//CONTENT + EXPORT
//=======================================================

export const SubmitBtn = props =>
  <button {...props}>
    {props.children}
  </button>;