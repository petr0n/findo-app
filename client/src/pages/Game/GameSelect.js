import React, { Component } from "react";
// import { Link } from "react-router-dom"; //react router dom


//CONTENT
//=======================================================

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user,
        loggedIn: this.props.loggedIn
      }
  };
  
  componentDidMount(){
    console.log('GameSelect this.state.loggedIn: ', this.state.loggedIn);
  }
  
  handleGameSelect = (gameType) => {
		this.props.handlePageChange("gameboard", this.state.user, this.props.loggedIn, gameType);
  }
  



  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 px-4 py-2 m-4 flex items-center text-center hover_bg-orange-300";
		console.log('GameSelect this.state.user', this.state.user);
    return (
      <div>
        <div className="background mx-auto rounded px-3 py-10 w-full flex items-center justify-center">
          <div className={btnStyle} onClick={() => this.handleGameSelect("PG")}>Kid Friendly Board</div>
          <div className={btnStyle} onClick={() => this.handleGameSelect("R")}>Adult Style Board</div>
        </div>
        <div className="flex items-center justify-center" onClick={() => this.props.handlePageChange("suggesttile", this.state.user, this.state.loggedIn)}>
          <div className={btnStyle}>Suggest a tile</div>
        </div>
      </div>
    );
  }
}

export default GameSelect;