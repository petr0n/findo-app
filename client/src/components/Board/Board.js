import React, { Component } from "react";
import "./Board.css";
import TileBig from "../../components/TileBig";


//CONTENT
//=======================================================

class Board extends Component {
	// constructor(props) {
  //   super(props); 
  //   this.state = {
  //     tileBigState: this.props.tileBigState
  //     tileBigData: this.
  //   }
  // }

  render(){
    // console.log('<Board tileBigState', this.props.tileBigState);
    return (
      <div className="board-inner flex flex-wrap justify-center"> 
        {this.props.tiles}
        {this.props.tileBigState === "active" &&
          <TileBig 
            key={"xy"} 
            tileData={"asdf"} 
            tileBigState={this.props.tileBigState} 
            tileBigData={this.props.tileBigData}
            handleTileBigButtonClick={this.props.handleTileBigButtonClick} />
        }
      </div>
    );
  }
};

//EXPORT
//=======================================================
export default Board;