import React, { Component } from "react";
// import { Link } from "react-router-dom"; //react router dom


//CONTENT
//=======================================================

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        user: this.props.user
      }
  };
  
  componentDidMount(){
    console.log('GameSelect this.state.user', this.state.user);
  }
  
  handleGameSelect = (gameType) => {
		this.props.handlePageChange("gameboard", this.state.user, gameType);
	}


  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 px-4 py-2 m-4 flex items-center text-center hover_bg-orange-300";
		// console.log('GameSelect this.state.user', this.state.user);
    return (
      <div>
        <div className="background nav-toggle rounded mx-auto items-center justify-between mb-2 w-full">
					<div className="login-text back cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login", this.state.user)}>Back to Login</div>
				</div>
        <div className="background mx-auto rounded px-3 py-10 w-full flex items-center justify-center">
          <div className={btnStyle} onClick={() => this.handleGameSelect("isPG")}>Kid Friendly Board</div>
          <div className={btnStyle} onClick={() => this.handleGameSelect("isR")}>Adult Style Board</div>
        </div>
        <div className="flex items-center justify-center" onClick={() => this.props.handlePageChange("suggesttile", this.state.user)}>
          <div className={btnStyle}>Suggest a tile</div>
        </div>
      </div>
    );
  }
}

export default GameSelect;