const db = require("../models");

module.exports = {

    //Users
    //TODO Change create to findbyid or create
    findAllUsers: function (req, res) {
        db.User
            .find(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    createUser: function (req, res) {
        db.User
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    removeUser: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    updateUser: function (req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
},
};
