const router = require("express").Router();
const userRoutes = require("./users");
const tileRoutes = require("./tiles");
const gameboardRoutes = require("./gameboard");

router.use("/users", userRoutes);
router.use("/tiles", tileRoutes);
router.use("/gameboard", gameboardRoutes);

module.exports = router;
