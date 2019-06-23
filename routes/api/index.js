const router = require("express").Router();
<<<<<<< HEAD

router.route("/");

module.exports = router;
=======
const userRoutes = require("./users");
const tileRoutes = require("./tiles")

router.use("/users", userRoutes);
router.use("/tiles", tileRoutes);

module.exports = router;
>>>>>>> master
