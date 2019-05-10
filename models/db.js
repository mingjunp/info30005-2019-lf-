const mongoose = require("mongoose");
const url = "mongodb+srv://yangzhao:yangzhao@cluster0-zav7w.mongodb.net/test?retryWrites=true";
mongoose.connect(url, {useNewUrlParser: true});
