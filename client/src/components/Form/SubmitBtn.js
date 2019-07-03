//IMPORT
//=======================================================
import React from "react";
//import { Link } from "react-router-dom"

//CONTENT + EXPORT
//=======================================================

export const SubmitBtn = props =>
  <button {...props} className="edit-btn px-3 py-2 rounded">
    {props.children}
  </button>