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
    width: '15vw',
    height: '15vw',
    margin: '.5vw',
  };
  return (
    <div className="tile-wrapper flex items-center justify-center text-center">
      <div className={`tile md_p-3 sm_p-1 bg-white rounded" + ${props.isCenter ? 'bg-blue-400' : ''}`} style={tileStyle}>Text goes here</div>
    </div>
  )
};

//EXPORT
//=======================================================
export default Tile;