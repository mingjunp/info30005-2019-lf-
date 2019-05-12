const User = require("../models/user");


module.exports.getUser = function (req, res) {
    User.find(function (err, users) {
        if (!err) {
            return res.json({errno: 0, data: users});
        } else {
            return res.json({errno: -1, message: "wrong!"});
        }
    });
};


//user log in function
module.exports.login = function (req, res) {

    User.findOne({
        "userName": req.body.userName,
    }).then(function (userInfo) {
        if (!userInfo) {
            console.log("no such user!");
            return res.json({errno: -1, message: "no such user!"});
        } else {
            if (req.body.password != userInfo.password) {
                console.log("wrong password!");
                return res.json({errno: -1, message: "wrong password!"});
            } else {
                console.log("log in successfully!");
                return res.json({errno: 0, data: userInfo.userName});
            }
        }
    });
};


//logout function
module.exports.logout = function (req, res) {
    delete req.session.userName;
    if (req.session.userName) {
        return res.json({errno: -1, message: "logout fail!"});
    } else {
        return res.json({errno: 0, data:"logout successfully!"});
    }
};


//user sign up function
module.exports.createUser = function (req, res) {

    User.findOne({
        "userName": req.body.userName,
    }).then(function (userInfo) {

        if (!userInfo) {
            // insert new user if they don't exist
            const user = new User({
                "userName": req.body.userName,
                "password": req.body.password,
            });
            user.save();
            res.send(user);

        } else {
            return res.json({errno: -1, message: "That user already exists!"});
        }
    });

};

//check login
module.exports.checkLogin = function (req, res) {
    userName = req.query.userName;
    console.log(req.session);
    if (req.session.userName) {
        return res.json({errno: 0, data: req.session.userName});
    } else {
        return res.json({errno: -1, message: "login failed"});
    }
};

module.exports.checkUserName = function (req, res) {
    userName = req.query.userName;
    User.find({"userName": userName}, (err, user) => {
        if (err) {
            return res.json({errno: -1, message: "MongoDB Error!"});
        };
        if (user.length > 0) {
            res.json({"valid": false});
        } else {
            res.json({"valid": true});
        }
    });
}






						
