const router = require("express").Router();
const userRoutes = require("./users");
const tileRoutes = require("./tiles");
const gameboardRoutes = require("./gameboard");
const checkWinnerRoutes = require("./winner");

router.use("/users", userRoutes);
router.use("/tiles", tileRoutes);
router.use("/gameboard", gameboardRoutes);
router.use("/checkWinner", checkWinnerRoutes);

module.exports = router;
