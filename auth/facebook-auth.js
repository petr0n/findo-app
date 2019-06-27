const FacebookStrategy = require('passport-facebook').Strategy;
let db = require("../models");
require("dotenv").config();


module.exports = (passport) => {

	passport.use(new FacebookStrategy({
			clientID: process.env.FACEBOOK_APP_ID,
			clientSecret: process.env.FACEBOOK_APP_SECRET,
			callbackURL: "http://localhost:3000/auth/facebook/login"
		},
		function(accessToken, refreshToken, profile, done) {
			// User.findOrCreate(..., function(err, user) {
      // if (err) { return done(err); }
      // 	done(null, user);
    	// });
  	}
	));


}