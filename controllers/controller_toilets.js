const Toilet = require("../models/toilet");

module.exports.getToilet = function (req, res) {
    Toilet.find({}, function (err, r) {
        res.send(r);
    });
};
module.exports.createToilet = function (req, res) {
    const toilet = new Toilet({
        location: "10.888758,88.08498",
        picture: "988882",
        //测试版
    });
    toilet.save().then(res.send('successful! ' + toilet));
};

