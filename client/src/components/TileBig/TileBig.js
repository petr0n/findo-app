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
        <div className="text-right p-3">
          <i className="far fa-times-circle text-brand-red xl_text-6xl text-3xl hover_text-orange-300" onClick={() => this.props.handleBigTileCloseClick()}></i>
        </div>
        <div className="flex flex-col items-center justify-center h-full">

          <div className="p-5 text-center">
            <p className="tileBigText font-bold">{this.tileBigData.tileText}</p>
          </div>
          <div className="py-10 items-center w-full">
            <TileBigButton 
              tileBigData={this.props.tileBigData}
              handleTileBigButtonClick={this.props.handleTileBigButtonClick} />
          </div>
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