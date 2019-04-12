const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
    comments: String,


});

module.exports = mongoose.model("review", reviewSchema, "reviews");