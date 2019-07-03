const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const random = require('mongoose-simple-random');

const tileSchema = new Schema({
  tileText: { type: String, required: true, trim: true },
  isPG: { type: Boolean, required: false },
  isR: { type: Boolean, required: false },
  status: { type: String, required: false, default: "pending" },
  eventType: { type: String, required: true, default: "MNStateFair" },
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: "User", required: true
  },
  approvedBy: {
    type: Schema.Types.ObjectId,
    ref: "User", required: false
  },
  dateCreated: { type: Date, default: Date.now }
});

tileSchema.plugin(random);

const Tile = mongoose.model("Tile", tileSchema);

module.exports = Tile;