const mongoose = require("mongoose");
const likeSchema = new mongoose.Schema({
    "userName":String,
    "toiletID":String,
    "isLike":String
});

module.exports = mongoose.model("like", likeSchema, "likes");