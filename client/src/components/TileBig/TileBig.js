import React, { Component } from "react";
import "./TileBig.css";
import Button from "../Buttons";


class TileBig extends Component {
  constructor(props) {
    super(props);
    //this.isCenter = this.props.isCenter;
    this.state = {
      bigTileState: ''
    }
  }

  render() {
    return (
      <div className={"tileBig " + (this.state.bigTileState ? 'clicked' : '')} style={{display: "none"}} ref={this.props.tileId}>
        <div className="p-2">
          Someone walking barefoot
        </div>
        <div className="button-wrapper">
          <Button />
        </div>
      </div>
    )  
  }
};

//EXPORT
//=======================================================
export default TileBig;