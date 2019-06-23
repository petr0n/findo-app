const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {type: String, required: true} ,
  email: {type: String, required: true},
  googleId: {type: Number, required: false},
  facebookId: {type: Number, required: false},
  role: {type: String, required: true}
});

//TO DO: google and facebook ids can be optional and unique. Should email be unique?  

const User = mongoose.model("User", userSchema);

module.exports = User;