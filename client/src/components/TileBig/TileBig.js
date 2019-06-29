import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import "./TileBig.css";
import TileBigButton from "../TileBigButton";


class TileBig extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.props.tileBigState === "active" ? true : false;
    this.tileBigData = this.props.tileBigData
  }

  

  render() {
    console.log('this.isActive', this.isActive);
    return (
      <CSSTransition in={this.isActive} timeout={200} classNames="clicked" unmountOnExit>
        <div className="tileBig flex items-center justify-center text-center">
          <div className="p-5">
            <p className="tileBigText">{this.tileBigData.tileText}</p>
            <div className="button-wrapper">
              <TileBigButton 
                tileBigData={this.props.tileBigData}
                handleTileBigClick={this.props.handleTileBigClick} />
            </div>
          </div>
        </div>
      </CSSTransition>
    )  
  }
};

//EXPORT
//=======================================================
export default TileBig;