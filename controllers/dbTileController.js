const db = require("../models");

module.exports = {

    //Tiles
    findAllTiles: function (req, res) {
        db.Tile
            .find(req.query)
            .populate("userId")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findAllPendingTiles: function (req, res) {
    //     db.Tile
    //         .find({status: "Pending"})
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findById: function (req, res) {
        db.Tile
            .findById(req.params.id)
            .populate("userId")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createTile: function (req, res) {
        db.Tile
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeTile: function (req, res) {
        db.Tile
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateTile: function (req, res) {
        db.Tile
            .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
};
