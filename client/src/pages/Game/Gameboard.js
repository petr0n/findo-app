import React, { Component } from "react";
import Board from "../../components/Board";
import Tile from "../../components/Tile";



//CONTENT
//=======================================================

class Gameboard extends Component {
	constructor(props) {
    super(props);
    this.state = {
			tiles: []
		}
	};
	
	makeTileGrid = () => {
    let tiles = [];
		for(let i = 0;i < 25; i++){
			tiles.push(<Tile info={"info"} />);
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
			<div>
				<div className="trans-white mx-auto rounded flex flex-col items-center p-8 w-full flex-none">
					<h2>Gameboard</h2>
					<div className="cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login")}>Back to Login</div>
				</div>
				<Board tiles={this.state.tiles} />
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;