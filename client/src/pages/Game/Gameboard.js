import React, { Component } from "react";
import Board from "../../components/Board";
import Tile from "../../components/Tile";
import gameboardAPI from '../../utils/gameboardAPI';
import winnerAPI from '../../utils/checkForFindoAPI';



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
			gameType: this.props.gameType,
			gameboardId: this.props.gameboardId ? this.props.gameboardId : "",
			gameWon: false,
			tileAnimation: "rubberBand"
		}
		this.handleTileBigButtonClick = this.handleTileBigButtonClick.bind(this);
	};

	componentDidMount(){
		// console.log("Gameboard componentDidMount user: ", this.state.user);
		if (this.props.gameboardId) {
			this.getTiles(this.state.gameType, this.props.gameboardId);
		} else {
			this.getTiles(this.state.gameType);
		}
		this.setRandomInterval(true);
	}
	componentWillUnmount() {
		this.setRandomInterval(false);

	}
	

	getTiles = (gameType, gameboardId) => {
		
		if (gameboardId) {
			gameboardAPI.getGame(gameboardId)
			.then(res => {
				//console.log("Gameboard getTiles w/ gameboardId res.data: ", res.data);
				this.setState({ 
					loading: false,
					tilesData: this.renderGrid(res.data.tiles),
					gameboardId: gameboardId
				});
			})
			.catch(err => console.log(err));
		} else {
			let gt = gameType ? gameType : "PG";
			gameboardAPI.createGame({ gameType: gt, userId: this.props.user })
			.then(res => {
				//console.log("Gameboard getTiles res.data: ", res.data);
				this.setState({ 
					loading: false,
					tilesData: this.renderGrid(res.data.tiles),
					gameboardId: res.data._id
				}) 
			})
			.catch(err => console.log(err));
		}

	}
	
	renderGrid = (boardTiles) => {
		// console.log('Gameboard renderGrid boardTiles', boardTiles);
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

	handleBigTileCloseClick = () => {
		this.setState({ 
			tileBigState: "inactive",
		});
	}
	
	handleTileBigButtonClick = (tileData) => {
		// console.log('Gameboard handleTileBigButtonClick: ', this.state.tiles);
		this.setTileState(this.state.tilesArr, tileData._id, "checkIt");
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
						handleTileClick={this.handleTileClick}
						id={ctr} />);
				ctr++;
			}
		}
		// console.log('t', t);
		return tiles; 
	}

	setTileState = (tilesArr, id, action) => {
		// console.log('setTileState tileAnimation', this.state.tileAnimation);

		// console.log("setTileState id : ", id);
		const newTiles = tilesArr.map((tile) => {
			tile.tileAnimation = "";
			if (tile._id === id && action === "checkIt") {
				tile.isChecked = tile.isChecked ? false : true;
				// update tile in db too
				this.updateGameTile(id, tile.isChecked);
			} else if (tile._id === id && action === "animateIt") {
				tile.tileAnimation = this.state.tileAnimation ? this.state.tileAnimation : "";
			}
			return tile;
		});
		this.setState({
			tilesArr: newTiles,
			tiles: this.makeTileGrid(newTiles)
		});
	}

	updateGameTile = (id, isChecked) => {
		gameboardAPI.updateGameTile(id, isChecked)
		.then(res => {
			// console.log('tile updated', res);
			winnerAPI.checkForFindo(this.state.gameboardId)
			.then(res => {
				// console.log(res);
				this.setState({ gameWon: res.data.winner });
				if (res.data.winner) {
					this.props.handlePageChange("winner", this.state.user);
				}
			});
		})
		.catch(err => console.log(err))
	}

	setRandomInterval = (run) => {
		let randomizer = setInterval(
			function() {
				this.setStateOnRandomTile();
			}
			.bind(this),
			2500 );
		if (!run) {
			clearInterval(randomizer);
		}
	}

	setStateOnRandomTile = () => {
		// set random animation 
		let animationArr = ["tada", "shake", "rubberBand", "jello", "wobble", "jackInTheBox"];
		let randomNum = Math.floor(Math.random() * (6 - 1)) + 0;
		let randomAnimation = animationArr[randomNum];
		this.setState({ tileAnimation: randomAnimation });

		// get random tile
		let random = Math.floor(Math.random() * (25 - 1)) + 0;
		// let randomTile = document.getElementById("tile-" + random);
		let randomTileId = random !== 12 ? this.state.tilesArr[random]._id : "";
		if (randomTileId) {
			this.setTileState(this.state.tilesArr, randomTileId, "animateIt");
		}
		// console.log("random: ", random);
		// console.log("randomTileId: ", randomTileId);
	}

	
	render() {
		// console.log("this.state.tileAnimation: ", this.state.tileAnimation);
		// console.log("Gameboard componentDidMount tilesArr: ", this.state.tilesArr);

		if (this.state.loading) {
			return (<div className="background">Loading...</div>)
		}
		return (
			<div className="board mx-auto">
				{/* <p className="text-white"> {this.state.gameWon ? "Winner" : "Loser"}</p> */}
				<Board
					tiles={this.state.tiles} 
					tileBigState={this.state.tileBigState} 
					tileBigData={this.state.tileBigData}
					handleTileBigButtonClick={this.handleTileBigButtonClick}
					user={this.state.user}
					handleBigTileCloseClick={this.handleBigTileCloseClick} />
			</div>
		);
	}
}

//EXPORT
//=======================================================
export default Gameboard;