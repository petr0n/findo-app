//IMPORT
//=======================================================
import React from "react";
import "./Wrapper.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const Wrapper = ({children}) => (
  <div className="md:flex mx-auto">{children}</div>
);

//EXPORT
//=======================================================
export default Wrapper;