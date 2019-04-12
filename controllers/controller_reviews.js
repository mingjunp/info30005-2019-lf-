const Review = require("../models/review");

module.exports.getReview = function (req, res) {
    Review.find({}, function (err, r) {
        res.send(r);
    });
};
module.exports.createReview = function (req, res) {

};

