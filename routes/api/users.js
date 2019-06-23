const router = require("express").Router();
const dbUserController = require("../../controllers/dbUserController");

// Matches with "/api/users"
router.route("/")
  .get(dbUserController.findAllUsers)
  .post(dbUserController.createUser);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(dbUserController.findById)
  .delete(dbUserController.removeUser)
  .put(dbUserController.updateUser);

// Matches with "/api/users/fb/:facebookid"
router.route("/fb/:id")
  .get(dbUserController.findByFacebookId);

// Matches with "/api/users/g/:googleId"
router.route("/g/:id")
  .get(dbUserController.findByGoogleId);

module.exports = router;
