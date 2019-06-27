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
		return cb(null, profile);
		// return cb(profile);
		// User.findOrCreate({ facebookId: profile.id }, function (err, user) {
    // });
	}
);
module.exports = strategy;