const router = require("express").Router();
const dbController = require("../../controllers/dbController");
const axios = require("axios");

// Matches with "/api/users"
router.route("/")
  .get(dbController.findAllUsers)
  .post(dbController.createUser);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(dbController.findById)
  .delete(dbController.removeUser)
  .put(dbController.updateUser);

// Matches with "/api/users/:facebookid"
router.route("/:facebookId")
  .get(dbController.findByFacebookId);

router.route("/:googleId")
  .get(dbController.findByGoogleId);

module.exports = router;
