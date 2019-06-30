const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../controllers/dbUserController");
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
			email: profile.emails[0].value,
			name: profile.displayName,
			token: accessToken
		};
		return cb(null, userData);
	}
);
module.exports = strategy;