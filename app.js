const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const bodyParser = require('body-parser');//用于处理Json数据
const toilets_routes = require('./routes/toilets_routes');
const users_routes = require('./routes/users_routes');
// npm i morgan
const logger = require('morgan'); //log
// npm i express-session
const session = require('express-session');
// npm i connect-redis
const RedisStore = require('connect-redis')(session);
// npm i cookie-parser
const cookieParser = require('cookie-parser');
// npm i cors
//const cors = require('cors');
app.use(bodyParser.json());
//app.use(cors);
// app.all('*', function(req, res, next) {
//     console.log(req.headers.origin);
//     res.header("Access-Control-Allow-Origin", req.headers.origin);
//     res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
//     res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
//     res.header("X-Powered-By",' 3.2.1');
//     res.header("Access-Control-Allow-Credentials", true);
//     if(req.method=="OPTIONS") res.send(200);/*让options请求快速返回*/
//     else  next();
// });

// add log
app.use(logger('combined'));
app.use(cookieParser());

const redisClient = require('./db/redis');
const sessionStore = new RedisStore({
    client: redisClient
});
app.use(session({
    secret: 'WJiol#23123_',
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

app.listen(process.env.PORT || 3000, function () {
    console.log("let's do something fun.")
});

