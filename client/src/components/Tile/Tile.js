//IMPORT
//=======================================================
import React from "react";
import "./Tile.css";
//import { Link } from "react-router-dom"

//CONTENT
//=======================================================
const Tile = (props) => {
  // const { isCenter } = this.props;
  const tileStyle = {
    width: '150px',
    height: '125px',
    margin: '10px',
    backgroundColor: 'rgba(255,255,255,.8)',
    borderRadius: '4px',
    fontFamily: '"Rubik", sans-serif'
  };
  return (
    <div className="tile-wrapper flex items-center justify-center text-center">
      <div className={`"fade-in-fwd tile md_p-3 sm_p-1 bg-white rounded " + ${props.isCenter} ? 'center' : ''}`} style={tileStyle}><p>TEXT</p></div>
    </div>
  )
};

//EXPORT
//=======================================================
export default Tile;