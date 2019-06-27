import React, { Component } from "react";
import Board from "../../components/Board";
import Tile from "../../components/Tile";
import axios from 'axios';



//CONTENT
//=======================================================

class Gameboard extends Component {
	constructor(props) {
    super(props);
    this.state = {
			tiles: []
		}
	};

	getTiles = () => {
    axios.get("/api/tiles");
  }
	
	makeTileGrid = () => {
		let tiles = [];
		let isCenter = false;
		for(let i = 0;i < 25; i++){
			if (i===12) {
				isCenter = true;
			}
			tiles.push(<Tile info={"info"} key={"x"+i} isCenter={isCenter} />);
			isCenter = false;
		}
		console.log('tiles', tiles);
		return tiles;
	}

	renderGrid = () => {
		this.setState({ 
			tiles: this.makeTileGrid() 
		});
	}

	componentDidMount(){
		this.renderGrid();
	}
	
	render() {
		return (
			<div className="board mx-auto">
				<div className="background nav-toggle rounded mx-auto items-center justify-between mb-2 w-full">
					<div className="login-text back cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login")}>Back to Login</div>
				</div>
				<Board tiles={this.state.tiles} />
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;