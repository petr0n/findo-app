import React, { Component } from "react";
import "./Board.css";
import TileBig from "../../components/TileBig";


//CONTENT
//=======================================================

class Board extends Component {
	constructor(props) {
    super(props); 
    this.state = {
      tileBigState: ''
    }
  }

  showtileBig = (tileId) => {
    return (<TileBig key={"xy"} />)
  }
  

  render(){

    return (
      <div className="board-inner flex flex-wrap justify-center"> 
        {this.props.tiles}
        {this.state.tileBigState ?
        this.showtileBig : ''}
      </div>
    );
  }
};

//EXPORT
//=======================================================
export default Board;