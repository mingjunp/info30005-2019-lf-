const Review = require("../models/review");


module.exports.createReview = function (req, res) {
    const review = new Review({
        "userName":req.body.userName,
        "toiletName":req.body.toiletName,
        "comments":req.body.comments,
        "reviewPictures":req.body.reviewPictures,
        "rating":req.body.rating
    });
    //upload and formalize pics
    //https://gist.github.com/bingeboy/5589501

    review.save(function(err,newReview){
        if(!err){
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


