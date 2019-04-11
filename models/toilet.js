const mongoose = require("mongoose");
const toiletSchema = new mongoose.Schema({
    location: String,
    picture: String,

});

module.exports = mongoose.model("toilet", toiletSchema, "toilets");
