const like = require("../models/like");

module.exports.getByUserToilet = function (req, res) {
    console.log("--------");
    console.log(req.session.userName);
    if (req.session.userName) {
        return res.json({errno: 0, data: "no"});
    }
    let toiletID = req.query.toiletID;
    like.findOne({"userName": req.session.userName, "toiletID": toiletID}, ['isLike'], function (err, like) {
        if (err) {
            return res.json({errno: -1, message: "MongoDb Error"});
        } else {
            return res.json({errno: 0, data: like.isLike});
        }
    });
};

module.exports.setLike = function (req, res) {
    if (!req.session.userName) {
        return res.json({errno: -1, message: "please login first!"});
    } else {
        let isLike = req.query.isLike;
        let toiletID = req.query.toiletID;

        like.findOneAndUpdate(
            {
                "userName": req.session.userName,
                "toiletID": toiletID
            },
            {"isLike": isLike},
            {upsert: true, new: true, setDefaultsOnInsert: true},
            function (err, like) {
                if (!err) {
                    console.log(like);
                    return res.json({errno: 0, data: like});
                } else {
                    return res.json({errno: -1, message: "MongoDb Error"});
                }
            });
    }
};
