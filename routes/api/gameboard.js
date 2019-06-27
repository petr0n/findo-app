const router = require("express").Router();
const dbGameboardController = require("../../controllers/dbGameboardController");

// Matches with "/api/gameboard"

router.route("/")
//   .get(dbTileController.findAllTiles)
  .post(dbGameboardController.createGame);

// Matches with "/api/gameboard/:id"
router.route("/:id")
  .get(dbGameboardController.findGameById)
  .delete(dbGameboardController.removeGameboard)

module.exports = router;
