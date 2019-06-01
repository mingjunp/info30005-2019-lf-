const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    "userName": String,
    "password": String,
    "toilets": [String]
});

module.exports = mongoose.model("user", userSchema, "users");
