const like = require("../models/like");
const { SuccessModel, ErrorModel } = require('../models/resModel');

const setLike = (req, res, next) =>{
    if (!req.session.userName) {
        return res.json(
            new ErrorModel("please login first")
        );
    }
    isLike = req.query.isLike;
    toiletID = req.query.toiletID;

    like.findOneAndUpdate(
        {
        "userName": req.session.userName,
        "toiletID": toiletID
        },
        {"isLike":isLike},
        {upsert: true, new: true, setDefaultsOnInsert: true},
        (err, like) => {
        if (err) res.json(new ErrorModel('Mongodb Error!'));
        res.json(new SuccessModel(like));
    });
};

const getByUserToilet = (req, res, next) =>{
    console.log("--------")
    console.log(req.session.userName);
    if (typeof(req.session.userName) == undefined) {
        return res.json(
            new SuccessModel("no")
        );
    }
    toiletID = req.query.toiletID;
    like.findOne({"userName":req.session.userName,"toiletID":toiletID},['isLike'],(err, like) => {
        if (err) return res.json(new ErrorModel('Mongodb Error!'));
        console.log(like);
        if (like) return res.json(new SuccessModel(like.isLike));
        return res.json(new SuccessModel("no"));
    });
};

module.exports = {
    setLike,
    getByUserToilet,
};