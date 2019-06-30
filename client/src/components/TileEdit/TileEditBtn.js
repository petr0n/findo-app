//IMPORT
//=======================================================
import React from "react";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================

const FormBtn = props =>
  <button class="cursor-pointer bg-blue-500 hover_bg-blue-700 text-white font-bold py-2 px-4 rounded float-right" {...props}>
    {props.children}
  </button>;

//EXPORT
//=======================================================
export default FormBtn;