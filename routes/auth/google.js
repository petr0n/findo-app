const router = require("express").Router();
const passport = require("passport");
require("dotenv").config();

let db = require("../../models");

router.get('/', (req, res, next) => { // url -> /auth/google
	// console.log('/auth/google req.query: ', req.query);
	passport.authenticate('google', { scope: ["profile", "email"] })
});  


router.get('/callback', // url -> /auth/google/callback
  passport.authenticate('google', { 
		failureRedirect: '/error',
		session: true 
	}),
	(req, res) => {
		console.log('callback req.user: ', req.user);
		//req.session.googleId = req.user.googleId;
		// console.log('req.session: ', req.session);
		db.User
			.findOneAndUpdate({socialId: req.user.id}, req.body, {new: true, upsert: true})
			.then((dbModel) => {
				console.log(dbModel)
				// res.json(dbModel);
				//res.redirect(process.env.APP_URL + "?token=" + req.user.token);
				res.redirect("/login");
			})
			.catch(err => res.status(422).json(err));
	}
);

module.exports = router;