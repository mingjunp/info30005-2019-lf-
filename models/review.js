const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    "comments": String,
    "userName":String,
    "toiletName":String,

    "rating":Number,
    "date":{
        type: Date,
        Default: Date.now
    }
    //"reviewPictures":String,
});


module.exports = mongoose.model("review", reviewSchema, "reviews");