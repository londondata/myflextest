// User Controller
const db = require("../models");

// Index - GET - Presentational (all of a resource)
const index = (req, res) => {
    db.User.find()
        .exec((err, usersAll) => {
            return res.status(200).json({
                message: "Success",
                data: usersAll,
            });
        });
};

module.exports = {
    index,
}