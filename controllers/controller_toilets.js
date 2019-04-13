const mongoose = require('mongoose');
const Toilet = require("../models/toilet");

module.exports.getToilet = function (req, res) {
    Toilet.find(function (err, toilets) {
        if(!err){
            res.send(toilets);
        }else{
            res.sendStatus(404);
        }
    });
};
module.exports.createToilet = function (req, res) {
    const toilet = new Toilet({
        "userName":req.body.userName,
        "toiletName":req.body.toiletName,
        "toiletPicture":req.body.toiletPicture,
        "location":{
            lat:req.body.lat,
            lon:req.body.lon
        },
        "female":req.body.female,
        "male":req.body.male,
        "wheelchair":req.body.wheelchair,
        "babyFacil":req.body.babyFacil,
        "shower":req.body.shower,
        "aveRating":req.body.aveRating
    });
    toilet.save(function(err,newToilet){
        if(!err){
            res.send(newToilet);
        }else{
            res.sendStatus(400);
        }
    });
};

