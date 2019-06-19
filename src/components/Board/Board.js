//IMPORT
//=======================================================
import React from "react";
import "./Board.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const Board = (props) => (<div className="md:flex">{props.children}</div>);

//EXPORT
//=======================================================
export default Board;