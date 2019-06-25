const router = require("express").Router();
const userRoutes = require("./users");
const tileRoutes = require("./tiles")

router.use("/users", userRoutes);
router.use("/tiles", tileRoutes);

module.exports = router;
