//IMPORT
//=======================================================
import React from "react";
import "./Wrapper.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const Wrapper = ({children}) => (
  <div className="container mx-auto flex px-5">
    <div className="md_w-2/12 sm_w-0"></div>
    <div className="md_w-8/12 sm_w-full">
      {children}
    </div>
    <div className="md_w-2/12 sm_w-0"></div>
  </div>
);

export default Wrapper;