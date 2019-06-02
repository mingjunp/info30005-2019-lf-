const User = require("../models/user");

// get all users
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
    User.findOne({"userName": req.body.userName.toString()}, function (err, userInfo) {
        if (!err) {
            if (!userInfo) {
                return res.json({errno: -1, message: "no such user!"});
            } else {
                if (req.body.password !== userInfo.password) {
                    return res.json({errno: -1, message: "wrong password!"});
                } else {
                    req.session.userName = userInfo.userName;
                    res.json({errno: 0, data: {"userName": userInfo.userName}});
                }
            }
        } else {
            return res.json({errno: -1, message: "error!"});
        }

    });
};

//logout function
module.exports.logout = function (req, res) {
    delete req.session.userName;
    if (req.session.userName) {
        return res.json({errno: -1, message: "logout fail!"});
    } else {
        return res.json({errno: 0, data: "logout successfully!"});
    }
};

//user sign up function
module.exports.createUser = function (req, res) {

    User.findOne({
        "userName": req.body.userName.toString(),
    }).then(function (userInfo) {

        if (!userInfo) {
            // insert new user if they don't exist
            const user = new User({
                "userName": req.body.userName.toString(),
                "password": req.body.password.toString(),
            });
            user.save();
            return res.json({errno: 0, data: user});

        } else {
            return res.json({errno: -1, message: "That user already exists!"});
        }
    });

};

//check login
module.exports.checkLogin = function (req, res) {
    if (req.session.userName === undefined) {
        return res.json({errno: -1, message: "need to login"});
    } else {
        return res.json({errno: 0, data: req.session.userName});
    }
};

// check whether the user name is already existed in db
module.exports.checkUserName = function (req, res) {
    let userName = req.query.userName;
    User.find({"userName": userName}, (err, user) => {
        if (err) {
            return res.json({errno: -1, message: "MongoDB Error!"});
        }
        if (user.length > 0) {
            res.json({"valid": false});
        } else {
            res.json({"valid": true});
        }
    });
};







						
