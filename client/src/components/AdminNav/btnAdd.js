//IMPORT
//=======================================================
import React from "react";
import "./AdminNav.css";
import Buttons from "../..Buttons";

//CONTENT
//=======================================================

const Add = () => (
);



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