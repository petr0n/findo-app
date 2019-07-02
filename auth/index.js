const passport = require('passport');
const FacebookStrategy = require('./facebookStrategy');
const GoogleStratgey = require('./googleStrategy');
const mongoose = require("mongoose");
const db = require("../models");



passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------');
	done(null, user._id);
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called');
	console.log('id', id);
	let userId = mongoose.Types.ObjectId("5d1a21002c0c75975a32b01b");
	db.User.findById(userId)
		.then(user => {
			console.log('======= DESERIALIZE USER CALLED ======');
			console.log(user);
			console.log('--------------');
			done(null, user);
		})
		.catch(err => {
			console.log(err);
			done(err);
		});
})

// ==== Register Strategies ====
passport.use(FacebookStrategy)
passport.use(GoogleStratgey)

module.exports = passport;