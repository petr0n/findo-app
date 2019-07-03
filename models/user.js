const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {type: String, required: true},
  socialId: {type: String, required: true, unique: true},
  socialType: {type: String, required: true},
  role: {type: String, required: true},
  dateCreated: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;