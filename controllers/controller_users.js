const User = require("../models/user");

module.exports.getUser = function (req, res) {
    User.find(function(err,users){
        if(!err){
            res.send(users);
        }else{
            res.sendStatus(404);
        }
    });
};

module.exports.createUser = function (req, res) {
 	const user = new User({
        "userName":req.body.userName,
        "password":req.body.password,
        "phoneNumber":req.body.phoneNumber
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};

