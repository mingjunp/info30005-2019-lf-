const express = require("express");
const app = express();
const routes = require("./routes/routes.js");
const bodyParser = require('body-parser');//鐢ㄤ簬澶勭悊Json鏁版嵁
const session = require('express-session');
const RedisStore = require('connect-redis')(session);
const cookieParser = require('cookie-parser');
app.use(bodyParser.json());


app.use(express.static(__dirname + '/public'));

// Database setup
require('./models/db.js');

app.use("/", routes);   // 鏈�/鐨勬椂鍊檆all router

app.use(session({
        secret: 'DDD',
        cookie: {
        	maxAge:24*60*60*1000
        },
        
}));
    

app.listen(process.env.PORT || 3000, function () {
    console.log("let's do something fun.")
});

