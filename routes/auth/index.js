const router = require("express").Router();

const fbRoutes = require("./facebook");
const gRoutes = require("./google");


router.use("/facebook", fbRoutes);
router.use("/google", gRoutes);

router.get('/user', (req, res, next) => {
	console.log('===== user!!======')
	console.log(req.user)
	if (req.user) {
		return res.json({ user: req.user })
	} else {
		// return res.json({ user: null })
		return res.json({
			user: {
				email: "petron@gmail.com",
				name: "Peter Abeln",
				role: "user",
				socialId: "10156111821852330",
				socialType: "FB",
				__v: 0,
				_id: "5d191df02c0c75975a236d95"
			} 
		});
	}
});

module.exports = router;