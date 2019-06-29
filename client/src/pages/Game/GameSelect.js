import React, { Component } from "react";
// import { Link } from "react-router-dom"; //react router dom


//CONTENT
//=======================================================

class GameSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
        placeholder: "This is only a template"
      }
  };
  
  componentDidMount(){
    // add logic
  }
  
  handleGameSelect = (gameType) => {
    // e.preventDefault();
		console.log('gameType', gameType);
		if (gameType === "isPG") {
			// get PG tiles
		} else {
			// get R tiles
		}
    this.setState({
			gameType: gameType,
			currentPage: "game"
		});
		this.props.handlePageChange("gameboard");
	}


  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 p-1 flex items-center text-center ";
		// console.log('currentPage', this.state.currentPage);
    return (
      <div>
        <div className="background nav-toggle rounded mx-auto items-center justify-between mb-2 w-full">
					<div className="login-text back cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login")}>Back to Login</div>
				</div>
        <div className="background mx-auto rounded flex items-center justify-between p-3 w-full login-box-md">
          <div className={btnStyle} onClick={() => this.handleGameSelect("isPG")}>Kid Friendly Board</div>
          <div className={btnStyle} onClick={() => this.handleGameSelect("isR")}>Adult Style Board</div>
        </div>
      </div>
    );
  }
}

export default GameSelect;