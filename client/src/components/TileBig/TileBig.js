import React, { Component } from "react";
import { CSSTransition } from 'react-transition-group';
import "./TileBig.css";
import TileBigButton from "../TileBigButton";


class TileBig extends Component {
  constructor(props) {
    super(props);
    this.isActive = this.props.tileBigState === "active" ? true : false;
    // this.isActive = true; 
  }

  handleButtonClick = () => {
    
  }

  render() {
    console.log('this.isActive', this.isActive);
    return (
      <CSSTransition in={this.isActive} timeout={200} classNames="clicked" unmountOnExit>
        <div className="tileBig">
          <div className="p-2">
            Someone walking barefoot
          </div>
          <div className="button-wrapper">
            <TileBigButton handleTileBigClick={this.props.handleTileBigClick} />
          </div>
        </div>
      </CSSTransition>
    )  
  }
};

//EXPORT
//=======================================================
export default TileBig;