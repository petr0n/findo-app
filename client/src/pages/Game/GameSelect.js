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
		this.props.handlePageChange("game");
	}


  render() {
		const btnStyle = "cursor-pointer rounded bg-white border border-purple-500 p-2 h-30 flex items-center justify-center";
		console.log('currentPage', this.state.currentPage);
    return (
      <div className="background mx-auto rounded flex items-center justify-between p-8 w-full">
        <div className={btnStyle} onClick={() => this.handleGameSelect("isPG")}>Kid Friendly Board</div>
        <div className={btnStyle} onClick={() => this.handleGameSelect("isR")}>Adult Style Board</div>
      </div>
    );
  }
}

export default GameSelect;