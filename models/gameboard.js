const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameboardSchema = new Schema({
  userId: {type: Schema.Types.ObjectId,
    ref: "User"}, 
  gameStarted: { type: Date, default: Date.now },
  gameFinished: { type: Date},
  status: {type: String, required: true},
  tiles: [
    {tile: {type: Schema.Types.ObjectId, ref: "Tile"}, 
    position: {type: String, required: true},
    isChecked: {type: Boolean, required: true},
    isWinningTile: {type: Boolean},
    checkedTime: {type: Date}
  }]
});

const Gameboard = mongoose.model("Gameboard", gameboardSchema);

module.exports = Gameboard;