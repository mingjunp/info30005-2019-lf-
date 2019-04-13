const User = require("../models/user");

module.exports.getUser = function (req, res) {
    User.find({}, function (err, r) {
        res.send(r);
    });
};
module.exports.createUser = function (req, res) {

};

