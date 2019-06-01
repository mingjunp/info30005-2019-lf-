const mongoose = require("mongoose");

const toiletSchema = new mongoose.Schema({
    "toiletPictures": String,
    "reviewPictures": [String],
    "name": String,

    // who own this toilet
    "operator": String,

    // toilet's property : yes or no
    "female": String,
    "male": String,
    "baby_facil": String,
    "wheelchair": String,

    // location of this toilet
    "lat": Number,
    "lon": Number,
    "location_address": String,
    "location_city": String,
    "location_state": String,
    "location_zip": String,

    // toilet average rate
    "rate": {type: Number, default: 0}
});

// toiletSchema.index({location: "2dsphere"}) ;
module.exports = mongoose.model("toilet", toiletSchema, "toilets");
