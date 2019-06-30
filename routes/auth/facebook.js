const router = require("express").Router();
const passport = require("passport");

let db = require("../../models");


router.get('/', // url -> /auth/facebook
  passport.authenticate('facebook'));


  
router.get('/callback', // url -> /auth/facebook/callback
  passport.authenticate('facebook', { 
    failureRedirect: '/login', 
    session: true
  }),
  (req, res) => {
  console.log('fb callback req.user: ', req.user);
  let userDoc = {
    socialId: req.user.id,
    socialType: "FB",
    name: req.user.displayName,
    role: "user", 
    email: "findo@facebook.com"
  };
  db.User
    .findOneAndUpdate({ socialId: req.user.id }, userDoc, {new: true, upsert: true})
    .then((dbModel) => {
      console.log('dbModel' ,dbModel);
			res.redirect("/gameselect");
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;

