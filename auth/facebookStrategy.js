const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../controllers/dbUserController");
require("dotenv").config();


const strategy = new FacebookStrategy({
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: process.env.FACEBOOK_CALLBACKURL,
		profileFields: ['id', 'displayName', 'email']
	},
	function(accessToken, refreshToken, profile, done) {
		console.log('fb login', profile)
		User.findOrCreate({ facebookId: profile.id }, function (err, user) {
      return cb(err, user);
    });
	}
);
module.exports = strategy;
