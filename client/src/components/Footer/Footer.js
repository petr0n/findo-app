//IMPORT
//=======================================================
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const Footer = () => (
  <div className="footer text-center text-white py-10">
    &copy; FINDO GAME - All rights reserved - <Link to="/privacy">Privacy</Link>
  </div>
);

//EXPORT
//=======================================================
export default Footer;