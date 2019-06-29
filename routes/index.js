
const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");


// API Routes
router.use("/api", apiRoutes);
// authorization Routes
router.use("/auth", authRoutes);

router.get('/logout', function(req, res){
	req.session.destroy((err) => {
		if(err) return next(err)
		req.logout()
		res.redirect("/")
	})
});

module.exports = router;