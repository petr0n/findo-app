//IMPORT
//=======================================================
import React, { Component } from "react";
import "./Board.css";

//CONTENT
//=======================================================

class Board extends Component {
	// constructor(props) {
  //   super(props); 
  // }



  render(){
    // console.log('{this.props.tiles}', this.props.tiles)
    return (
      <div className="flex flex-wrap justify-center">
        {this.props.tiles}
      </div>
    );
  }
};

//EXPORT
//=======================================================
export default Board;