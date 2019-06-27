//IMPORT
//=======================================================
import React from "react";
import "./AdminNav.css";
import "./btnAdd";
import "./btnSuggested";
import "./btnView";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const AdminNav = ({children}) => (
  <div className="container mx-auto flex px-5">
    <div className="lg_w-2/12 md_w-1/12 sm_w-0"></div>
    <div className="lg_w-8/12 md_w-10/12 sm_w-full">
      {children}
    </div>
    <div className="lg_w-2/12 md_w-1/12 sm_w-0"></div>
  </div>
);

export default AdminNav;