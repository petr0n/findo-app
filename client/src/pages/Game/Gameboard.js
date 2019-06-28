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
		axios.get("/api/tiles")
			.then((res)=>{
				console.log('tiles', res)

			});
	}
	

	componentDidMount(){
		this.renderGrid();
		this.getTiles();
	}

	handleTileClick = (tileId) => {
    this.props.handleTileClick();
  }
	
	makeTileGrid = () => {
		let tiles = [];
		let isCenter = false;
		for(let x = 0; x < 5; x++){
			for(let y = 0; y < 5; y++){
				isCenter = false;
				if (x ===2 && y === 2) {
					isCenter = true;
				}
				tiles.push(<Tile info={"info"} tileId={"xy"+x+""+y} key={"xy"+x+""+y} isCenter={isCenter} />);
				
			}
		}
		// console.log('tiles', tiles);
		return tiles;
	}

	renderGrid = () => {
		this.setState({ 
			tiles: this.makeTileGrid()
		});
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