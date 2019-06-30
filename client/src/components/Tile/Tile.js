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
    console.log('tile mounted');
  }
  componentDidUpdate(){
    console.log('tile updated');
  }


  handleClick = (tileData) => {
    console.log('handleClick for TileBigClick: ', tileData)  
    this.props.handleTileClick(tileData);
  }
    
  render() {
    const tileData = this.state.tileData;
    // console.log('Tile tileData: ', tileData);
    return (
      <div className="tile-wrapper flex items-center justify-center text-center p-1" onClick={() => this.handleClick(this.props.tileData)}>
        <div className={"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center rounded " + (this.props.isCenter ? 'center-tile' : '') + (tileData.isChecked ? 'selected' : '')}> 
          {this.props.isCenter ?
            "FREE" : 
            tileData.tile.tileText}
        </div>
      </div>
    )
  }
};

export default Tile;