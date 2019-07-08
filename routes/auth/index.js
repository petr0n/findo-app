const router = require("express").Router();

const fbRoutes = require("./facebook");
const gRoutes = require("./google");


router.use("/facebook", fbRoutes);
router.use("/google", gRoutes);

router.get('/user/:logout?', (req, res, next) => {
	console.log('===== user!!======')
	console.log('req.query.user', req.query.user);
	console.log('req.user', req.user);
	console.log('req.params.logout', req.params.logout); 
	if (req.params.logout) { //logout 
		return res.json({ user: null });
	} else if (req.query.user) { //guest user object
		const userData = JSON.parse(req.query.user);
		return res.json({ user: userData });
	} else if (req.user) {
		return res.json({ user: req.user });
	} else {
		return res.json({ user: null });
	}
});

module.exports = router;