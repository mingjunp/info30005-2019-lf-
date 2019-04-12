const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const bodyParser = require('body-parser');//用于处理Json数据
app.use(bodyParser.json());

app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));

// Database setup
require('./models/db.js');

app.use("/", routes);   // 有/的时候call router


app.listen(process.env.PORT || 3000, function () {
    console.log("let's do something fun.")
});

