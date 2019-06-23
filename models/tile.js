const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const tileSchema = new Schema({
  tileText: {type: String, required: true} ,
  isPG: {type: Boolean, required: true},
  isR: {type: Boolean, required: true},
  status: {type: String, required: false, default: "Pending"},
  eventType: {type: String, required: true},
  userId:  {type: Schema.Types.ObjectId,
    ref: "User", required: false}
});

//Do we want approver and user who recommended the tile?

const Tile = mongoose.model("Tile", tileSchema);

module.exports = Tile;