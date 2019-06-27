const express = require('express');
const router = express.Router();
const passport = require("passport");

let db = require("../../models");

router.get('/google', (req, res, next) => {
	console.log('req.query: ', req.query);
	const authenticator = passport.authenticate('google', { 
		scope: [
			'https://www.googleapis.com/auth/userinfo.profile',
			'https://www.googleapis.com/auth/userinfo.email'
		]
	})
	authenticator(req, res, next);
});  

router.get('/google/callback', 
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
				res.json(dbModel);
			})
			.catch(err => res.status(422).json(err));
	}
);

router.get('/logout', function(req, res){
	req.session.destroy((err) => {
		if(err) return next(err)
		req.logout()
		res.sendStatus(200)
	})
  // req.logout();
  // res.redirect('/');
});



router.get('/facebook',
  passport.authenticate('facebook'));


router.get('/facebook/callback',
  passport.authenticate('facebook', { 
		failureRedirect: '/login', 
		session: true
	}),
  (req, res) => {
		console.log('fb callback req.user: ', req.user);
		let userDoc = {
			socialId: req.body.id,
			socialType: "FB"
		}
		db.User
			.findOneAndUpdate({ socialId: req.user.id }, {userDoc}, {new: true, upsert: true})
			.then((dbModel) => {
				console.log('dbModel' ,dbModel)
				res.json(dbModel);
				//res.redirect("/gameselect");
			})
			.catch(err => res.status(422).json(err));
  });



module.exports = router;