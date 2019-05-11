const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const bodyParser = require('body-parser');//鐢ㄤ簬澶勭悊Json鏁版嵁
const session = require('express-session');
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

// Database setup
require('./models/db.js');

app.use("/", routes);   // 鏈�/鐨勬椂鍊檆all router


app.listen(process.env.PORT || 3000, function () {
    console.log("let's do something fun.")
});

