const FacebookStrategy = require('passport-facebook').Strategy;
const User = require("../controllers/dbUserController");
require("dotenv").config();


const strategy = new FacebookStrategy(

	{
		clientID: process.env.FACEBOOK_APP_ID,
		clientSecret: process.env.FACEBOOK_APP_SECRET,
		callbackURL: "http://localhost:3000/auth/facebook/login"
	},
	function(accessToken, refreshToken, profile, done) {
		console.log('fb login', profile)
		User.findByFacebookId(profile, function(err, user) {
		if (err) { return done(err); }
		done(null, user);
		// User.createUser
		});
	}
);
module.exports = strategy;
