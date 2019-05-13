const Review = require("../models/review");
const Toilet = require("../models/toilet");
const path = require("path");


module.exports.createReview = function (req, res) {

    if (req.session.userName) {
        const review = new Review({
            "userName": req.session.userName,
            "toiletName": req.body.toiletName,
            "comments": req.body.comments,
            "rating": req.body.rating,
        });

        review.save(function (err, newReview) {
            if (!err) {
                return res.json({errno: 0, data: newReview});
            } else {
                return res.json({errno: -1, message: "MongoDb Error"});
            }
        });
    } else {
        res.json({errno: -1, message: 'Login first'})
    }
};

module.exports.uploadReviewPicture = function (req, res) {

    Review.findOneAndUpdate({userName: req.session.userName}, {reviewPictures: req.file.destination + req.file.filename}, function (err, review) {
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
    let toiletName = req.body.toiletName;
    Review.find({toiletName: toiletName}, null, function (err, result) {
        if (!err) {
            return res.json({errno: 0, data: result});
        } else {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
    });
}



