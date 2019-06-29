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
			tilesData: [],
			tileBigState: "inactive"
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

	  	

	handleTileClick = (tileData) => {
		this.setState({ 
			tileBigState: "active",
			tileBigData: tileData
		});
	}
	
	handleTileBigClick = (tileBigData) => {
		//console.log('handleTileBigClick tileBigData: ', tileBigData);
		this.setState(prevstate => ({
      tileBigState: !prevstate.display,
    }));
	}

	makeTileGrid = (boardTiles) => {
		let tiles = [];
		let isCenter = false;
		let ctr = 0;
		for(let x = 0; x < 5; x++){
			for(let y = 0; y < 5; y++){
				isCenter = ctr === 12 ? true : false;
				let tileData = {
					...boardTiles[ctr], 
					selected: false, 
					coords: x + "," + y
				}
				let id = "xy"+x+""+y;
				tiles.push(
					<Tile 
						tileData={tileData} 
						tileId={id} 
						key={id} 
						isCenter={isCenter} 
						handleTileClick={this.handleTileClick} />);
				ctr++;
			}
		}
		// console.log('t', t);
		return tiles;
	}

	setTileState = () => {

	}

	isWinningBoard = () => {

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
				<Board 
					tiles={this.state.tiles} 
					tileBigState={this.state.tileBigState} 
					tileBigData={this.state.tileBigData}
					handleTileBigClick={this.handleTileBigClick} />
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;