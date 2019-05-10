const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    // uid
    "userName":String,
    "password":String,
    "photo":String
});

module.exports = mongoose.model("user", userSchema, "users");
