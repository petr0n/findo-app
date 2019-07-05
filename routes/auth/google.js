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
		// console.log('gg callback req.user: ', req);
		let userDoc = {
			socialId: req.user.socialId,
			socialType: "GG", 
			name: req.user.name,
			role: "user",  
			email: req.user.email
		}; 
		// console.log('gg callback userDoc: ', userDoc);
		res.redirect(process.env.APP_URL + "/login");
		// db.User
		// 	.findOneAndUpdate({socialId: req.user.id}, userDoc, {new: true, upsert: true})
		// 	.then((dbModel) => {
		// 		console.log('dbModel' ,dbModel);
		// 		res.redirect("/login");
		// 	})
		// 	.catch(err => res.status(422).json(err));
	}
);

module.exports = router;