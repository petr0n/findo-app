import React, { Component } from "react";
import "./Tile.css";


class Tile extends Component {
  constructor(props) {
    super(props);
    //this.isCenter = this.props.isCenter;
    this.state = {
      tileData: this.props.tileData
    }
  };

  componentDidMount() {
    // console.log('tile mounted');
  }
  componentDidUpdate(){
    // console.log('tile updated');
  }


  handleClick = (tileData) => {
    console.log('handleClick tileData.isChecked: ', tileData.isChecked)  
    this.props.handleTileClick(tileData);
    this.setState({ tileData: tileData })
  }
    
  render() {
    const tileData = this.state.tileData;
    console.log('Tile tileData: ', tileData);
    const tileCenterClass = this.props.isCenter && tileData.isChecked ? "center-tile selected" : "";
    const tileSelectedClass = tileData.isChecked ? " selected" : "";
    return (
      <div className="tile-wrapper flex items-center justify-center text-center p-1" onClick={() => this.handleClick(this.props.tileData)}>
        <div className={"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center rounded " + tileCenterClass + tileSelectedClass}> 
          {
            this.props.isCenter ?
            "FREE" : 
            tileData.tile.tileText
          }
        </div>
      </div>
    )
  }
};

/* <div className={"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center rounded " + (this.props.isCenter ? 'center-tile' : '') + (tileData.isChecked ? ' selected' : '')}>  */

export default Tile;