//IMPORT
//=======================================================

import React from "react";
import "./Header.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================

const Header = () => (
  <div className="bounce-top my-10">
    <img src="../../images/findo-logo.png" alt="FINDO LOGO" className="mx-auto" />
    <div className="phosphate text-lg flex justify-between pl-5 pr-4 mt-1" style={{ color: "#F7D6C1", textShadow: "2px 2px 1px purple"}}>
      <span>MN</span> 
      <span>STATE</span> 
      <span>FAIR</span>
      <span>SCAVENGER</span> 
      <span>BINGO</span>
    </div>
  </div>
);

//EXPORT
//=======================================================

export default Header;