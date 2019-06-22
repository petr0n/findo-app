const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true} ,
  email: {type: String, required: true},
  googleId: {type: String, required: false, unique: true},
  facebookId: {type: String, required: false, unique: true},
  role: {type: String, required: true}
});

const User = mongoose.model("User", userSchema);

module.exports = User;