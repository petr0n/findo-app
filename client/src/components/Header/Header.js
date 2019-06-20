//IMPORT
//=======================================================

import React from "react";
import "./Header.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================

const Header = () => (
  <nav class="flex items-center justify-between flex-wrap bg-teal-500 p-6">
    <div class="flex items-center flex-shrink-0 text-white mr-6">
      <span class="font-semibold text-xl tracking-tight">Findo Header</span>
    </div>
  </nav>
);

//EXPORT
//=======================================================

export default Header;