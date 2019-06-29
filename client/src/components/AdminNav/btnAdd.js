//IMPORT
//=======================================================
import React from "react";
import "./AdminNav.css";

//CONTENT
//=======================================================

class Board extends Component {
	// constructor(props) {
  //   super(props); 
  // }



  render(){

    return (
      <div className="board-inner flex flex-wrap justify-center"> 
        {this.props.tiles}
      </div>
    );
  }
};

//EXPORT
//=======================================================
export default Board;