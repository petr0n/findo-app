const router = require("express").Router();
const passport = require("passport");

let db = require("../../models");


router.get('/', // url -> /auth/facebook
  passport.authenticate('facebook', { scope: ['email'] }));


  
router.get('/callback', // url -> /auth/facebook/callback
  passport.authenticate('facebook', { 
    failureRedirect: '/login', 
    session: true
  }),
  (req, res) => {
  console.log('fb callback req.user: ', req.user);
  res.redirect(process.env.APP_URL + "/gameselect");
  // let userDoc = {
  //   socialId: req.user.socialId,
  //   socialType: "FB",
  //   name: req.user.name,
  //   role: "user", 
  //   email: req.user.email
  // };
});

module.exports = router;

