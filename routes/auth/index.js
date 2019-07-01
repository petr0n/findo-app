const router = require("express").Router();

const fbRoutes = require("./facebook");
const gRoutes = require("./google");


router.use("/facebook", fbRoutes);
router.use("/google", gRoutes);

router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.query.user);
	if (req.query.user) { //guest user object
		const userData = JSON.parse(req.query.user);
		return res.json({ user: userData })
	} else if (req.user) {
		return res.json({ user: req.user })
	} else {
		return res.json({ user: null }) 
	}
});

module.exports = router;