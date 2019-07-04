const db = require("../models");

module.exports = {
    checkForFindo: function (req, res) {

        //get game by id and then filter to select the checked tiles
        let selectedTiles = [];
        let xTiles = [];
        let yTiles = [];
        let leftDiagonal = [];
        let rightDiagonal = [];
        let winningBoard = false;


        db.Gameboard
            .findById(req.params.id)
            .then(dbModel => {
                // console.log(dbModel)
                selectedTiles = dbModel.tiles.filter(function (tile) {
                    // console.log(tile.isChecked)

                    return tile.isChecked === true;
                })

                for (let i = 0; i < 5; i++) {

                    //filter for x where it is the same as i
                    xTiles = selectedTiles.filter(function (tile) {
                        return tile.xPosition === i;
                    });

                    //filter for y where it is the same as i
                    yTiles = selectedTiles.filter(function (tile) {

                        return tile.yPosition === i;
                    });

                    //check for 5 of the same x or y
                    if (xTiles.length === 5) {
                        // console.log("X Winner");
                        winningBoard = true;
                        break;
                    }
                    else if (yTiles.length === 5) {
                        // console.log("Y Winner")
                        winningBoard = true;
                        break;
                    }
                }

                // console.log("selectedTiles" + selectedTiles)
                // console.log("x" + xTiles);
                // console.log("y" + yTiles);

                //check for diagonal win
                if (!winningBoard) {
                    leftDiagonal = selectedTiles.filter(function (tile) {
                        return tile.yPosition === tile.xPosition;
                    });

                    rightDiagonal = selectedTiles.filter(function (tile) {
                        return tile.yPosition + tile.xPosition === 4;
                    });

                    if (leftDiagonal.length === 5) {
                        winningBoard = true;
                        // console.log("Left Diagonal Winner")
                    }
                    else if (rightDiagonal.length === 5) {
                        winningBoard = true;
                        // console.log("Right Diagonal Winner")
                    }
                }
                // console.log("left" + leftDiagonal)
                // console.log("right" + rightDiagonal)
                return winningBoard;
            })

            .then(winningBoard => res.json({ winner: winningBoard }))
            .catch(err => res.status(422).json(err))
    },
    // .catch(err => res.status(422).json(err))

    // recordWinningGame: function(req,res) {
    //     db.Gameboard
    //         .findOneAndUpdate({ "tiles._id": req.params.id }, 
    //             {"$set": {"tiles.$.isChecked": req.body.isChecked}}, 
    //             { new: true })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
}
