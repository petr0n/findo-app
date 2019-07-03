const router = require("express").Router();
const dbWinnerController = require("../../controllers/dbWinnerController");

// Matches with "/api/checkWinner/:id"
router.route("/:id")
  .get(dbWinnerController.checkForFindo); 

module.exports = router;
