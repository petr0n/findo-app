const db = require("../models");

module.exports = {

    //Tiles
    findAllTiles: function (req, res) {
        db.Tile
            .find(req.query)
            .sort({ dateCreated: -1 })
            .populate("createdBy")
            .populate("approvedBy")
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findGameboardTiles: function (req, res) {
        let qry = {
            isPG: true
        }
        if (req.params.gameType) {
            qry = {
                isPG: true,
                isR: true
            }
        }
        db.Tile
            .find(qry).limit(25)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Tile
            .findById(req.params.id)
            .populate("createdBy")
            .populate("approvedBy")
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
