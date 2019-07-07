import React, { Component } from "react";
import "./Tile.css";


class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tileData: this.props.tileData
    }
  };
 
  handleClick = (tileData) => {
    this.props.handleTileClick(tileData);
  }
    
  render() {
    const tileData = this.state.tileData;
    // console.log('Tile tileData: ', tileData);
    const tileCenterClass = this.props.isCenter ? " center-tile" : "";
    const tileSelectedClass = tileData.isChecked ? " selected" : "";
    return (
      <div 
        className="tile-wrapper flex items-center justify-center text-center p-1" 
        onClick={!this.props.isCenter ? () => this.handleClick(this.props.tileData) : ""}>
        <div className={"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center rounded overflow-hidden break-words" + tileCenterClass + tileSelectedClass}> 
          {
            this.props.isCenter ?
            "FREE SPACE" : 
            tileData.tile.tileText
          }
        </div>
      </div>
    )
  }
};

/* <div className={"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center rounded " + (this.props.isCenter ? 'center-tile' : '') + (tileData.isChecked ? ' selected' : '')}>  */

export default Tile;