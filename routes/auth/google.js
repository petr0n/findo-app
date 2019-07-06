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
		res.redirect(process.env.APP_URL + "/gameselect");
	}
);

module.exports = router;