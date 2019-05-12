const Review = require("../models/review");
const Toilet = require("../models/toilet");



module.exports.createReview = function (req, res) {
    const review = new Review({
        "userName":req.body.userName,
        "toiletName":req.body.toiletName,
        "comments":req.body.comments,
        //"reviewPictures":req.body.reviewPictures,
        "rating":req.body.rating
    });

    review.save(function(err,newReview){
        console.log(newReview._id);
        if(!err){
            Toilet.findOneAndUpdate({toiletName: newReview.toiletName},  { $push: { reviewPictures: newReview._id }},function(err,toilet) {
                if(!err){
                    console.log(toilet);
                }
            });
            res.send(newReview);
        }else{
            res.sendStatus(400);
        }
    });

};

module.exports.getReview = function (req, res) {
    Review.find(function(err,reviews){
        if(!err){
            res.send(reviews);
        }else{
            res.sendStatus(404);
        }
    });
};


//load reviews of certain toilet
module.exports.loadReviews = function (req,res) {
    let toiletName = req.body.toiletName;
    Review.find({toiletName: toiletName}, null,function (err,result) {
        if(!err){
            res.send(result);
        }
        else{
            res.sendStatus(400);
        }
    });
};


