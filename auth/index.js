    
const passport = require('passport');
const FacebookStrategy = require('./facebookStrategy');
const GoogleStratgey = require('./googleStrategy');
const db = require("../models");



passport.serializeUser((user, done) => {
	console.log('=== serialize ... called ===')
	console.log(user) // the whole raw user object!
	console.log('---------')
	done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
	console.log('DEserialize ... called');
	console.log('_id', id);
	if (id.match(/^[0-9a-fA-F]{24}$/)){
		db.User.findById(id)
			.then(user => {
				console.log('======= DESERILAIZE USER CALLED ======')
				console.log(user)
				console.log('--------------')
				done(null, user)
			})
			.catch(err => {
				console.log(err);
				done(null, null);
			});
		// db.User.findOne(
		// 	{ _id: id },
		// 	(err, user) => {
		// 		console.log('======= DESERILAIZE USER CALLED ======')
		// 		console.log(user)
		// 		console.log('--------------')
		// 		done(null, user)
		// 	}
		// );
	}
	done(null, null);
})

// ==== Register Strategies ====
passport.use(FacebookStrategy)
passport.use(GoogleStratgey)

module.exports = passport;