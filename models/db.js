const mongoose = require("mongoose");
const url = "mongodb+srv://yangzhao:yangzhao@cluster0-zav7w.mongodb.net/test?retryWrites=true";
//"mongodb+srv://mingjun:qwertyuiop22@cluster0-6p0dh.mongodb.net/test?retryWrites=true"
mongoose.connect(url, {useNewUrlParser: true});
