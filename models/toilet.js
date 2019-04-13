const mongoose = require("mongoose");
const toiletSchema = new mongoose.Schema({
    "userName":String,
    "toiletName":String,
    "toiletPicture":String,
    "location":{lat:String, lon:String},
    "female":String,
    "male":String,
    "wheelchair":String,
    "babyFacil":String,
    "shower":String,
    "aveRating":Number
});

module.exports = mongoose.model("toilet", toiletSchema, "toilets");
