const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

let db = require("../../models");

router.get('/', passport.authenticate('google', { scope: ["profile", "email"] }) );  


router.get('/callback', // url -> /auth/google/callback
  passport.authenticate('google', { 
		failureRedirect: '/error',
		session: true 
	}), 
	(req, res) => {
		console.log('gg callback req.user: ', req.user);
		// let userDoc = {
		// 	socialId: req.user.socialId,
		// 	socialType: "GG", 
		// 	name: req.user.name,
		// 	role: "user",  
		// 	email: req.user.email
		// }; 
		// console.log('gg callback userDoc: ', userDoc);
		res.redirect(process.env.APP_URL + "/login");
	}
);

module.exports = router;