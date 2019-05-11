const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const bodyParser = require('body-parser');//用于处理Json数据
const toilets_routes = require('./routes/toilets_routes');
const users_routes = require('./routes/users_routes');
const reviews_routes = require('./routes/reviews_routes');
const likes_routes = require('./routes/likes_routes');
// npm i morgan
const logger = require('morgan'); //log
// npm i express-session
const session = require('express-session');
// npm i connect-redis
const RedisStore = require('connect-redis')(session);
// npm i cookie-parser
const cookieParser = require('cookie-parser');

app.use(bodyParser.json());

// add log
app.use(logger('combined'));
app.use(cookieParser());

const redisClient = require('./db/redis');
const sessionStore = new RedisStore({
    client: redisClient
});
app.use(session({
    secret: 'Yang-Zhao',
    cookie: {
        // path: '/',
        // httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000
    },
    //store: sessionStore
}));

app.use(express.static(__dirname + '/public'));

// Database setup
require('./models/db.js');

app.use("/", routes);   // 有/的时候call router

//
app.use("/api/toilets",toilets_routes);

//
app.use("/api/users",users_routes);

//
app.use("/api/reviews",reviews_routes);

//
app.use("/api/likes",likes_routes);

app.listen(process.env.PORT || 3000, function () {
    console.log("let's do something fun.")
});

