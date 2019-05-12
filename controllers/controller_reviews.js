const Review = require("../models/review");
const Toilet = require("../models/toilet");
const path = require("path");


module.exports.createReview = function (req, res) {
    //const host = req.host;
    //const filePath = req.protocol + "://" + host + '/' + req.file.path;
    //const filePath = req.file.path;

    const review = new Review({
        "userName": req.body.userName,
        "toiletName": req.body.toiletName,
        "comments": req.body.comments,
        "rating": req.body.rating,
        //"reviewPictures": filePath,
    });


    review.save(function (err, newReview) {
        if (!err) {
            Toilet.findOneAndUpdate({toiletName: newReview.toiletName}, {$push: {reviewPictures: newReview._id}}, function (err, toilet) {
                if (!err) {
                    // console.log(toilet);
                }
            });
            return res.json({errno: 0, data: newReview});
        } else {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
    });
}


//load reviews of certain toilet
module.exports.getReviewsByToilet = function (req, res) {
    let toiletName = req.body.toiletName;
    Review.find({toiletName: toiletName}, null, function (err, result) {
        if (!err) {
            return res.json({errno: 0, data:result});
        } else {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
    });
}



