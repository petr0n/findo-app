const router = require("express").Router();
const apiRoutes = require("./api");
const authRoutes = require("./auth");
require("dotenv").config();


// API Routes
router.use("/api", apiRoutes);
// authorization Routes
router.use("/auth", authRoutes);

router.get('/logout', function(req, res){
	req.session.destroy((err) => {
		if(err) return next(err)
		
		res.redirect(process.env.APP_URL + "/")
	})
});

module.exports = router;