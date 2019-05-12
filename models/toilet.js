const mongoose = require("mongoose");

const toiletSchema = new mongoose.Schema({
    "userName": String,
    "toiletName": String,
    "toiletPicture": String,
<<<<<<< HEAD
    "reviewPictures":{
        type:[String],
    },
=======
>>>>>>> sddua
    "location": {
        "type": {
            type: String,
            enum: ['Point'],
            required: true
        },
        "coordinates": {
            type: [Number],
            required: true
        },
    },
    //yes/no
    "female": String,
    "male": String,
    "wheelchair": String,
    "babyFacil": String,
    "shower": String,
    "aveRating": Number
});

// toiletSchema.index({location: "2dsphere"}) ;

module.exports = mongoose.model("toilet", toiletSchema, "toilets");
