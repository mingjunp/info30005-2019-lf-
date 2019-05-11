const review = require("../models/review");
const { SuccessModel, ErrorModel } = require('../models/resModel');

const createReview = (req, res, next) =>{
    if (!req.session.userName) {
        return res.json(
            new ErrorModel("please login first")
        );
    }
    const newReview = new review({
        "comments": req.body.comments,
        "userName": req.session.userName,
        "toiletID": req.body.toiletID,
        "rating": req.body.rating
    });
    newReview.save((err, newReview) => {
        if (err) res.json(new ErrorModel('Mongodb Error!'));
        res.json(new SuccessModel(newReview));
    });
};

const getReviewsByToilet = (req, res, next) =>{
    toiletID = req.query.toiletID;
    review.find({"toiletID": toiletID}, (err, reviews) =>{
        if (err) return res.json(new ErrorModel("Mongodb Error!"));
        return res.json(new SuccessModel(reviews));
    });
};



module.exports = {
    createReview,
    getReviewsByToilet,
};