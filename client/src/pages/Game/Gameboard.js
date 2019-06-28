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
			loading: true,
			tiles: [],
			tilesData: []
		}
	};

	componentDidMount(){
		this.getTiles();
		// this.renderGrid();
	}

	getTiles = () => {
		axios.get("/api/tiles/game")
			.then((result) => { 
				const boardTiles = result.data;
				this.setState({ 
					loading: false,
					tilesData: this.renderGrid(boardTiles)
				}) 
			})
			.catch(error => { console.error(error); return Promise.reject(error); });
	}
	
	renderGrid = (boardTiles) => {
		this.setState({ 
			tiles: this.makeTileGrid(boardTiles)
		});
	}

	makeTileGrid = (boardTiles) => {
		let tiles = [];
		let isCenter = false;
		for(let x = 0; x < 5; x++){
			for(let y = 0; y < 5; y++){
				isCenter = false;
				if (x ===2 && y === 2) {
					isCenter = true;
				}
				tiles.push(<Tile tileData={boardTiles[x+y]} key={"xy"+x+""+y} isCenter={isCenter} />);
			}
		}
		// console.log('t', t);
		return tiles;
	}
	

	handleTileClick = (tileId) => {
    this.props.handleTileClick();
	}



	
	render() {
		if (this.state.loading) {
			return (<div className="background">Loading...</div>)
		}
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