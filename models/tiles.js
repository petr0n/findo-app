const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tileSchema = new Schema({
  tiletext: {type: String, required: true} ,
  isPG: {type: Boolean, required: true},
  isR: {type: Boolean, required: true},
  status: {type: String, required: false},
  eventType: {type: String, required: true},
  userId:  {type: Schema.Types.ObjectId,
    ref: "User"}
});

const Tile = mongoose.model("Tile", tileSchema);

module.exports = Tile;