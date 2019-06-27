const db = require("../models");

module.exports = {

    //TODO: Routes: 
    // Create game
	// Update game
	// Get game by user and status

    createGame: function (req, res) {

      db.Tile.findRandom({}, {}, {limit: 7}, function(err, results) {
        if (!err) {
          console.log(results); // 5 elements
        }
      });
    },
    // let randomTiles = db.Tile.aggregate([{ $sample: { size: 4 } }]).result;
    // console.log(db.Tile.aggregate([{ $sample: { size: 4 } }]).result);
    // 

 
    findGameById: function (req, res) {
        db.Gameboard
            .findById(req.params.id)
            .populate("userId")
            .populate("tile")
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
