const router = require("express").Router();

const fbRoutes = require("./facebook");
const gRoutes = require("./google");


router.use("/facebook", fbRoutes);
router.use("/google", gRoutes);


module.exports = router;