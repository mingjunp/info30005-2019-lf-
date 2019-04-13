const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    "comments": String,
    "userName":String,
    "toiletName":String,
    "reviewPictures":String,
    "rating":Number


});

module.exports = mongoose.model("review", reviewSchema, "reviews");