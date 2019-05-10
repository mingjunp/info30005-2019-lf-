const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const toiletSchema = new Schema({

    // the name of this toilet
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

const toilet = mongoose.model('toilets', toiletSchema);

module.exports = toilet;