import React, { Component } from "react";
import "./Tile.css";


class Tile extends Component {
  constructor(props) {
    super(props);
    //this.isCenter = this.props.isCenter;
    this.state = {
      x: "inactive"
    }
  };

  componentDidMount() {
  }


  handleTileClick = (tileId) => {
    this.setState({  tileBigState: "active" })
    this.props.handleTileClick(this.state.tileBigState);
  }
    
  render() {
    // console.log('this.props.tileData', this.props.tileData);
    const tileData = this.props.tileData;
    return (
      <div className="tile-wrapper flex items-center justify-center text-center p-1" onClick={() => this.handleTileClick(this.props.tileId)}>
        <div className={"fade-in-fwd tile md_p-3 sm_p-1 flex items-center justify-center text-center rounded " + (this.props.isCenter ? 'center-tile' : '')}> 
          {tileData.tileText}
        </div>
      </div>
    )
  }
};

export default Tile;