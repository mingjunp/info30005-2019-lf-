const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    "comments": String,
    "userName":String,
    "toiletID":String,
    "reviewPictures":String,
    "rating":Number,
    "date":
        {
            type: Date,
            default: Date.now
        }
});

module.exports = mongoose.model("review", reviewSchema, "reviews");