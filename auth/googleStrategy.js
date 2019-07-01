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
			console.log('g profile', profile);
			let userData = {
				email: profile.emails[0].value,
				socialId: profile.googleId,
				name: profile.displayName,
				token: accessToken
			};
			return done(null, userData);
		}
);
module.exports = strategy;