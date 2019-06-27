const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random');

const tileSchema = new Schema({
  tileText: { type: String, required: true },
  isPG: { type: Boolean, required: true },
  isR: { type: Boolean, required: true },
  status: { type: String, required: false, default: "Pending" },
  eventType: { type: String, required: true },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User", required: true
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: "User", required: false
  }
});

tileSchema.plugin(random);

const Tile = mongoose.model("Tile", tileSchema);

module.exports = Tile;