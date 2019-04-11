const Toilet = require("../models/toilet");

module.exports.findAll = function (req,res) {
    Toilet.find({}, function (err,r) {
        res.send(r);
    });
};

