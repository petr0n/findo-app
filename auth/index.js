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
	let userId = mongoose.Schema.Types.ObjectId(id);
	console.log('id', userId);
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
	// if (id.match(/^[0-9a-fA-F]{24}$/)){
	// 	// db.User.findOne(
	// 	// 	{ _id: id },
	// 	// 	(err, user) => {
	// 	// 		console.log('======= DESERILAIZE USER CALLED ======')
	// 	// 		console.log(user)
	// 	// 		console.log('--------------')
	// 	// 		done(null, user)
	// 	// 	}
	// 	// );
	// }
})

// ==== Register Strategies ====
passport.use(FacebookStrategy)
passport.use(GoogleStratgey)

module.exports = passport;