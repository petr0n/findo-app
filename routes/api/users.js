const router = require("express").Router();
const dbUserController = require("../../controllers/dbUserController");

// Matches with "/api/users"
router.route("/")
  .get(dbUserController.findAllUsers)
  // .post(dbUserController.createUser)
  .post(dbUserController.findUserAndUpdate);

// Matches with "/api/users/:id"
router.route("/:id")
  .get(dbUserController.findById)
  .delete(dbUserController.removeUser)
  .put(dbUserController.updateUser);  

module.exports = router;
