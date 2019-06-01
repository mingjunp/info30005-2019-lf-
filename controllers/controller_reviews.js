const Review = require("../models/review");
const Toilet = require("../models/toilet");
const mongoose = require("mongoose");

module.exports.createReview = function (req, res) {
    if (req.session.userName) {
        const review = new Review({
            "userName": req.session.userName,
            "toiletID": req.body.toiletID,
            "comments": req.body.comments,
            "rating": req.body.rating,
            "date": Date.now()
        });

        review.save(function (err, newReview) {
            if (!err) {
                // if there is a review picture, add the pic path in review
                if (req.file) {
                    Review.findOneAndUpdate(
                        {_id: newReview._id},
                        {reviewPictures: req.file.destination + req.file.filename},
                        function (err, review) {
                            if (!err) {
                                return res.json({errno: 0, data: newReview});
                            } else {

                            }
                        });
                } else {
                    return res.json({errno: 0, data: newReview});
                }
            } else {
                return res.json({errno: -1, message: "MongoDb Error"});
            }
        });
    } else {
        res.json({errno: -1, message: 'Login first'})
    }
};

module.exports.uploadReviewPicture = function (req, res) {

    Review.findOneAndUpdate({userName: req.session.userName}, {reviewPictures: req.file.destination + req.file.filename},
        function (err, review) {
            if (!err) {
                Toilet.findOneAndUpdate({toiletName: review.toiletName}, {$push: {reviewPictures: review._id}});
                return res.json({errno: 0, data: review})
            } else {
                return res.json({errno: -1, message: "Error"});
            }
        });
};

//load reviews of certain toilet
module.exports.getReviewsByToilet = function (req, res) {
    let toiletID = req.query['toiletID'];
    Review.find({toiletID: toiletID}, null, function (err, result) {
        if (!err) {
            return res.json({errno: 0, data: result});
        } else {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
    });
};



