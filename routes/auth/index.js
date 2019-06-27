const router = require("express").Router();

const fbRoutes = require("./facebook");
const gRoutes = require("./google");


router.use("/facebook", fbRoutes);
router.use("/google", gRoutes);

router.get('/logout', function(req, res){
	req.session.destroy((err) => {
		if(err) return next(err)
		req.logout()
		res.sendStatus(200)
	})
});


module.exports = router;