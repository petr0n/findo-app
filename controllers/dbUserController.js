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
    //Update user by _id
    updateUser: function (req, res) {
        db.User
        .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    //Find user by socialId and update OR create user if they don't exist
    findUserAndUpdate: function (req,res) {
        db.User
        .findOneAndUpdate({socialId: req.body.socialId}, req.body, {new: true, upsert: true})
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    }
};
