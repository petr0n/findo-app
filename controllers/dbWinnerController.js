const db = require("../models");

module.exports = {
    checkForFindo: function (req, res) {

        //get game by id and then filter to select the checked tiles
        //filter array for x0, 1, 2, 3, 4.  if results.length ===5, yay!
        //filter array for y0, 1, 2, 3, 4
        //check for diagonals  
        let selectedTiles = [];

        db.Gameboard
            .findById(req.params.id)
            .then(dbModel => {
                console.log(dbModel)
                selectedTiles = dbModel.tiles.filter(function (tile) {
                    console.log(tile.isChecked)
                    return tile.isChecked === true;
                })

                for (let i = 0; i < 5; i++) {

                    let xTiles = selectedTiles.filter(function (tile) {
                        return tile.xPosition === i;
                    });

                    let yTiles = selectedTiles.filter(function (tile) {
                        return tile.yPosition === i;
                    });

                    //check for 5 of the same x or y
                    if (xTiles.length === 5 || yTiles.length === 5) {
                        console.log("X or Y Winner")
                        //YAY.
                        //break out and set the winner 
                    }
                }

                let leftDiagonal = selectedTiles.filter(function (tile) {
                    return tile.yPosition === tile.xPosition;
                });

                let rightDiagonal = selectedTiles.filter(function (tile) {
                    return tile.yPosition + tile.xPosition === 4;
                });

                console.log("selectedTiles" + selectedTiles)

                if (leftDiagonal.length === 5) {
                    console.log("Left Diagonal Winner")
                }
                else if (rightDiagonal.length === 5) {

                    console.log("Right Diagonal Winner")
                }
                console.log("left" + leftDiagonal)
                console.log("right" + rightDiagonal)
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    }
    // .catch(err => res.status(422).json(err))

    // updateGameTile: function(req,res) {
    //     db.Gameboard
    //         .findOneAndUpdate({ "tiles._id": req.params.id }, 
    //             {"$set": {"tiles.$.isChecked": req.body.isChecked}}, 
    //             { new: true })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
}
