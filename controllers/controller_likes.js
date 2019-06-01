const like = require("../models/like");
const Toilet = require("../models/toilet");
const mongoose = require("mongoose");

module.exports.getByUserToilet = function (req, res) {
    if (!req.session.userName) {
        return res.json({errno: 0, data: "no"});
    } else {
        let toiletID = req.query.toiletID;
        like.findOne({"userName": req.session.userName, "toiletID": toiletID}, ['isLike'], function (err, like) {
            if (err) {
                return res.json({errno: -1, message: "MongoDb Error"});
            } else {
                if (like) {
                    return res.json({errno: 0, message: like.isLike});
                } else {
                    return res.json({errno: -1, message: "No like toilets"});
                }
            }
        });
    }
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

// get all user favourite toilets by username in the session
// return all toilets information
module.exports.getCollections = function (req, res) {
    if (!req.session.userName) {
        return res.json({errno: -1, message: "please login first!"});
    } else {
        like.find({userName: req.session.userName, isLike: "yes"}, function (err, likes) {
            if (!err) {
                let IDList = [];

                likes.map(function (item, index) {
                    IDList.push(mongoose.Types.ObjectId(item.toiletID));
                });

                Toilet.find({
                    _id: {
                        $in: IDList
                    }
                }, function (err, toilets) {
                    if (!err) {
                        return res.json({errno: 0, data: toilets});
                    } else {
                        return res.json({errno: -1, message: "MongoDb Error"});
                    }
                });
            } else {
                return res.json({errno: -1, message: "MongoDb Error"});
            }
        });

    }
};
