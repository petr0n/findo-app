const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../models/user");
require("dotenv").config();


const strategy = new FacebookStrategy({
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: process.env.FACEBOOK_CALLBACKURL,
		profileFields: ['id', 'displayName', 'email']
	},
	function(accessToken, refreshToken, profile, cb) {
		console.log('fb login', profile);
		let userData = {
			socialId: profile.id,
			email: profile.emails[0].value,
			name: profile.displayName,
			role: "user",
			socialType: "FB"
		};
		User.findOneAndUpdate({ socialId: profile.id }, userData, {new: true, upsert: true})
			.then(user => {
				console.log('fb strategy user: ', user);
				return cb(null, user);
			})
			.catch(err => console.log('fb strategy err: ', err));
	}
);
module.exports = strategy;