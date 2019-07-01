import React, { Component } from "react";
import Board from "../../components/Board";
import Tile from "../../components/Tile";
import gameboardAPI from '../../utils/gameboardAPI';



//CONTENT
//=======================================================

class Gameboard extends Component {
	constructor(props) {
    super(props);
    this.state = {
			loading: true,
			tiles: [],
			tilesData: [],
			tileBigState: "inactive",
			user: this.props.user
		}
	};

	componentDidMount(){
		console.log("Gameboard user: ", this.state.user)
		this.getTiles();
		// this.renderGrid();
	}

	// getTiles = () => {
	// 	axios.get("/api/tiles/game")
	// 		.then((result) => { 
	// 			const boardTiles = result.data;
	// 			this.setState({ 
	// 				loading: false,
	// 				tilesData: this.renderGrid(boardTiles)
	// 			}) 
	// 		})
	// 		.catch(error => { console.error(error); return Promise.reject(error); });
	// }

	getTiles = () => {
		gameboardAPI.createGame({ gameType: "PG", userId: "5d16c2a8aa327c8da02bb17a" })
			.then(res => {
				this.setState({ 
					loading: false,
					tilesData: this.renderGrid(res)
				}) 
			})
			.catch(err => console.log(err))
	}
	
	renderGrid = (boardTiles) => {
		// console.log('boardTiles',boardTiles.data.tiles);
		this.setState({ 
			tiles: this.makeTileGrid(boardTiles.data.tiles)
		});
	}

	  	

	handleTileClick = (tileData) => {
		this.setState({ 
			tileBigState: "active",
			tileBigData: tileData,
			// tiles: this.makeTileGrid(boardTiles)
		});
	}
	
	handleTileBigButtonClick = (tileData) => {
		console.log('handleTileBigButtonClick data: ', tileData);
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
				let key = "xy"+x+""+y;
				tiles.push(
					<Tile 
						tileData={boardTiles[ctr]} 
						key={key} 
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
					<div className="login-text back cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login", this.state.user)}>Back to Login</div>
				</div>
				<Board 
					tiles={this.state.tiles} 
					tileBigState={this.state.tileBigState} 
					tileBigData={this.state.tileBigData}
					handleTileBigButtonClick={this.handleTileBigButtonClick}
					user={this.state.user} />
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;