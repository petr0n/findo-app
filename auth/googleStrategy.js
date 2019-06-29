const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require("../controllers/dbUserController");

require("dotenv").config();


const strategy = new GoogleStrategy(
	{
		clientID: process.env.GOOGLE_CLIENTID,
		clientSecret: process.env.GOOGLE_CLIENTSECRET,
		callbackURL: process.env.GOOGLE_CALLBACKURL
	},
		function (accessToken, refreshToken, profile, done) {
			let userData = {
				email: profile.emails[0].value,
				name: profile.displayName,
				token: accessToken
			};
			console.log('g userData', userData);
			done(null, userData);
			// User.findByGoogleId({ googleId: profile.id });
		}
);
module.exports = strategy;