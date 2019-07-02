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
			tilesArr: [],
			tilesData: [],
			tileBigState: "inactive",
			user: this.props.user,
			loggedIn: this.props.loggedIn,
			gameType: this.props.gameType
		}
		this.handleTileBigButtonClick = this.handleTileBigButtonClick.bind(this);
	};

	componentDidMount(){
		// console.log("Gameboard gameType: ", this.state.gameType)
		// console.log("Gameboard user: ", this.state.user)
		this.getTiles(this.state.gameType, "");
	}

	getTiles = (gameType, userId) => {
		let gt = gameType ? gameType : "PG";
		// let uid = userId ? userId : ;
		gameboardAPI.createGame({ gameType: gt, userId: "5d16c2a8aa327c8da02bb17a" })
			.then(res => {
				this.setState({ 
					loading: false,
					tilesData: this.renderGrid(res.data.tiles)
				}) 
			})
			.catch(err => console.log(err))
	}
	
	renderGrid = (boardTiles) => {
		console.log('Gameboard renderGrid boardTiles', boardTiles);
		this.setState({ 
			tilesArr: boardTiles,
			tiles: this.makeTileGrid(boardTiles)
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
		console.log('Gameboard handleTileBigButtonClick: ', this.state.tiles);
		this.setTileState(this.state.tilesArr, tileData._id);
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

	setTileState = (tilesArr, id) => {
		console.log('setTileState run');
		const newTiles = tilesArr.map((tile) => {
			if (tile._id === id) {
				tile.isChecked = tile.isChecked ? false : true;
				console.log('setTileState tile.isChecked ', tile.isChecked); 
			}
			return tile;
		});
		this.setState({
			tilesArr: newTiles,
			tiles: this.makeTileGrid(newTiles)
		});
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
					<div className="login-text back cursor-pointer mb-4" onClick={() => this.props.handlePageChange("login", this.state.user, this.state.loggedIn)}>Back to Login</div>
				</div>
				<Board
					tiles={this.state.tiles} 
					tileBigState={this.state.tileBigState} 
					tileBigData={this.state.tileBigData}
					handleTileBigButtonClick={this.handleTileBigButtonClick}
					user={this.state.user}
					loggedIn={this.state.loggedIn} />
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;