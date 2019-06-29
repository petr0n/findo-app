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
    socialId: req.body.id,
    socialType: "FB"
  };
  db.User
    .findOneAndUpdate({ socialId: req.user.id }, {userDoc}, {new: true, upsert: true})
    .then((dbModel) => {
      console.log('dbModel' ,dbModel)
      // res.json(dbModel);
			res.redirect("http://localhost:3000/gameselect");
			//res.redirect("http://localhost:3000/gameselect?token=" + req.user.id);
    })
    .catch(err => res.status(422).json(err));
});

module.exports = router;