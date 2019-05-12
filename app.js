const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());
app.use(cookieParser());
app.use(express.static(__dirname + '/public'));

// Database setup
require('./models/db.js');



app.use(session({
    secret: 'DDD',
    cookie: {
        maxAge: 24 * 60 * 60 * 1000
    },
}));

app.use("/", routes);   //router

app.listen(process.env.PORT || 3000, function () {
    console.log("let's do something fun.")
});

