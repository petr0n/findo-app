const db = require("../models");

module.exports = {

	
	//TODO: Routes: 
	// Update game
	createGame: function (req, res) {
		console.log('req.body.gameType', req.body.gameType);
		let filter = (req.body.gameType === 'PG') ? { isPG: true, status: "active" } : { isR: true, status: "active" };

		db.Tile.findRandom(filter, {}, { limit: 24 }, function (err, results) {
			if (!err) {
				console.log('createGame', results);

				let x = 0; 
				let y = -1;
				let tilesArray = [];

				results.splice(12, 0, { name: "free" });
				// console.log("updated results " + results);

				for (let i = 0; i < results.length; i++) {
					if (i > 0 && i % 5 === 0) {
						x++;
						y = 0
					}
					else {
						y++;
					}

					if (x === 2 && y === 2) {
						//Handle FREE space
						tilesArray.push({
							xPosition: x,
							yPosition: y,
							isChecked: true
						});
					}
					else {
						//Handle non-free tiles
						tilesArray.push({
							tile: results[i]._id,
							xPosition: x,
							yPosition: y
						});
					}
					//Need to wait until the tiles array is built before saving the game... Can we do this differently?
					if (i === 24) {
						db.Gameboard
							.create({
								userId: req.body.userId,
								tiles: tilesArray
							})
							.then(dbModel => res.json(dbModel))
							.catch(err => res.status(422).json(err));
					}
				}
			}
		});
	},
	findGameById: function (req, res) {
		db.Gameboard
			.findById(req.params.id)
			.populate("userId")
			.populate("tiles.tile")
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	//send query params for user and status
	getGames: function (req, res) {
		db.Gameboard
			.find(req.query)
			.populate("userId")
			.populate("tiles.tile")
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	},
	removeGameboard: function (req, res) {
		db.Gameboard
			.findById({ _id: req.params.id })
			.then(dbModel => dbModel.remove())
			.then(dbModel => res.json(dbModel))
			.catch(err => res.status(422).json(err));
	}
};
