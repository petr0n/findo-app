const router = require("express").Router();
const dbTileController = require("../../controllers/dbTileController");

// Matches with "/api/tiles"
// Can search for pending tiles by including ?status=Pending
router.route("/")
  .get(dbTileController.findAllTiles)
  .post(dbTileController.createTile);

// Matches with "/api/tiles/:id"
router.route("/:id")
  .get(dbTileController.findById)
  .delete(dbTileController.removeTile)
  .put(dbTileController.updateTile);

// Matches with "/api/tiles/pending"
// router.route("/?status=pending")
//  .get(dbTileController.findAllPendingTiles); 

module.exports = router;
