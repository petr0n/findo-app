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
			done(null, userData);
			console.log('g userData', userData);
			User.findOrCreate({
				where: {
					googleIdToken: profile.id
				},
				defaults: {
					googleIdToken: profile.id,
					fullName: profile.displayName,
					email: profile.emails[0].value
				}
			}).spread(user => {
				// console.log('findorCreate user: ', user);
				done(null, user);
			}).catch(err => done(err, false))
		}
);
module.exports = strategy;