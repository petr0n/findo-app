const express = require('express');
const router = express.Router();
const passport = require("passport");

let db = require("../../models/user");

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
		console.log('req.session: ', req.session);
		// console.log('req.user.id: ', req.user.id);
		// let loginUrl = '/?loggedIn=true';
		// if (req.session.actions) {
		// 	if (req.session.actions.action === 'join') {

		// 		// add user and event to UserEvents table to join them up
		// 	// 	db.UsersEvents.create({
		// 	// 		UserId: req.user.id,
		// 	// 		EventId: req.session.actions.eventId
		// 	// 	}).then(function (dbUsersEvents) {
		// 	// 		console.log('dbUsersEvents', dbUsersEvents);
		// 	// 		// res.json(dbUsersEvents);
		// 	// 	});
		// 	// 	loginUrl = '/event/' + req.session.actions.eventId + '?joined=1';
		// 	// } else {
		// 	// 	loginUrl = '/addEvent';
		// 	// }
		// }
		// res.redirect(loginUrl);
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


// router.get('/facebook', (req, res, next) => {
// 	console.log('/auth/facebook req.query: ', req.query);
// 	// passport.authenticate('facebook');
// 	const authenticator = passport.authenticate('facebook');
// 	authenticator(req, res, next);

// });
router.get('/facebook',
  passport.authenticate('facebook'));


router.get('/auth/facebook/callback',
  passport.authenticate('facebook', { 
		failureRedirect: '/login', 
		session: true
	}),
  function(req, res) {
		console.log('fb callback req.user: ', req.user);
    // Successful authentication, redirect home.
    // res.redirect('/');
  });



module.exports = router;
