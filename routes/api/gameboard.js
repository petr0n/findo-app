const router = require("express").Router();
const dbGameboardController = require("../../controllers/dbGameboardController");

// Matches with "/api/gameboard"
router.route("/")
  .post(dbGameboardController.createGame)
  .get(dbGameboardController.getGames);

// Matches with "/api/gameboard/:id"
router.route("/:id")
  .get(dbGameboardController.findGameById)
  .delete(dbGameboardController.removeGameboard)
  .put(dbGameboardController.updateGame);

// Matches with "/api/gameboard/tile/:id"
router.route("/tile/:id/:isChecked")
.put(dbGameboardController.updateGameTile);

module.exports = router;
