const GoogleStrategy = require('passport-google-oauth2').Strategy;
const User = require("../models/user");


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
				socialId: profile.id,
				name: profile.displayName,
				socialType: "GG"
			};
			User.findOneAndUpdate({ socialId: profile.id }, userData, {upsert: true})
			//, role: {$ne : "admin"}
				.then(user => {
					console.log('gg strategy user: ', user);
					return done(null, user);
				})
				.catch(err => console.log('gg strategy err: ', err));
		}
);
module.exports = strategy;