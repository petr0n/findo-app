const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameboardSchema = new Schema({
  userId: {type: Schema.Types.ObjectId,
    ref: "User"}, 
  gameStarted: { type: Date, default: Date.now },
  gameFinished: {type: Date},
  status: {type: String, required: true, default: "Active"}, //Active or Inactive
  tiles: [
    {tile: {type: Schema.Types.ObjectId, ref: "Tile"}, 
    xPosition: {type: Number, required: true},
    yPosition: {type: Number, required: true},
    isChecked: {type: Boolean, required: true, default: false},
    isWinningTile: {type: Boolean, default: false},
    checkedTime: {type: Date}
  }]
});

const Gameboard = mongoose.model("Gameboard", gameboardSchema);

module.exports = Gameboard;