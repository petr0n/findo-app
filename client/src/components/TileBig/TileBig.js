import React, { Component } from "react";
// import { CSSTransition } from 'react-transition-group';
import "./TileBig.css";
import TileBigButton from "../TileBigButton";


class TileBig extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.props.tileBigState === "active" ? true : false;
    this.tileBigData = this.props.tileBigData.tile
  }


  render() {
    // console.log('TileBig this.isActive', this.isActive);
    return (
      <div className="tileBig flex flex-col">
        <div className="p-5 text-center flex items-center justify-center">
          <p className="tileBigText">{this.tileBigData.tileText}</p>
        </div>
        <div className="button-wrapper py-4 text-center w-full">
          <TileBigButton 
            tileBigData={this.props.tileBigData}
            handleTileBigButtonClick={this.props.handleTileBigButtonClick} />
        </div>
      </div>
    )  
  }
};
      // <CSSTransition in={this.isActive} timeout={200} classNames="clicked" unmountOnExit>
      // </CSSTransition>

//EXPORT
//=======================================================
export default TileBig;