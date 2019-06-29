import React, { Component } from "react";
import "./Board.css";
import TileBig from "../../components/TileBig";


//CONTENT
//=======================================================

class Board extends Component {
	constructor(props) {
    super(props); 
    this.state = {
      tileBigState: "inactive"
    }
  }

  showtileBig = (tileId) => {
    return (<TileBig key={"xy"} tileBigState={this.state.tileBigState}  />)
  }
  
  componentDidMount() {
    this.showtileBig();
  }

  render(){

    return (
      <div className="board-inner flex flex-wrap justify-center"> 
        {this.props.tiles}
        {this.state.tileBigState === "active" ?
          this.showtileBig :
          ""}
      </div>
    );
  }
};

//EXPORT
//=======================================================
export default Board;