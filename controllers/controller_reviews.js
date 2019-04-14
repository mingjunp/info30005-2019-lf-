const Review = require("../models/review");

module.exports.getReview = function (req, res) {
    Review.find(function(err,reviews){
        if(!err){
            res.send(reviews);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createReview = function (req, res) {
    const review = new Review({
        "userName":req.body.userName,
        "toiletName":req.body.toiletName,
        "comments":req.body.comments,
        "reviewPictures":req.body.reviewPictures,
        "rating":req.body.rating
    });
    Review.save(function(err,newReview){
        if(!err){
            res.send(newReview);
        }else{
            res.sendStatus(400);
        }
    });
};
