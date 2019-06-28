//IMPORT
//=======================================================
import React from "react";
import "./Tile.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const Tile = (props) => {
  // const { isCenter } = this.props;

  return (
    <div className="tile-wrapper flex items-center justify-center text-center">
      <div className={`"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center" + ${props.isCenter} ? 'center' : ''}`}><p>TEXT</p></div>
    </div>
  )
};

//EXPORT
//=======================================================
export default Tile;