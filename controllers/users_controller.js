const user = require("../models/user");
const { SuccessModel, ErrorModel } = require('../models/resModel');

const createUser = (req, res, next) =>{
    console.log(req.body);
    const newUser = new user({
        "userName":req.body.userName,
        "password":req.body.password,
        "photo":req.body.photo
    });
    user.find({"userName":req.body.userName},(err, user) =>{
        if (err) res.json(new ErrorModel("Mongodb Error!"));
        if (user.length > 0) {
            res.json(new ErrorModel("user name exist!"));
        }else {
            newUser.save((err, newUser) => {
                if (err) res.json(new ErrorModel('Mongodb Error!'));
                res.json(new SuccessModel(newUser));
            });
        }
    });
};

const login = (req, res, next) => {
    userName = req.body.userName;
    password = req.body.password;
    user.find({"userName":userName, "password":password}, (err, user) =>{
        if (err) res.json(new ErrorModel("Mongodb Error!"));
        if (user.length == 1) {
            req.session.userName = user[0].userName;
            console.log(req.session);
            res.json(new SuccessModel(user[0]));
            return
        } else {
            res.json(new ErrorModel("userName or password error!"));
        }
    });
};

const checkUserName = (req, res, next) => {
    userName = req.query.userName;
    user.find({"userName":userName},(err, user) =>{
        if (err) res.json(new ErrorModel("Mongodb Error!"));
        if (user.length > 0) {
            res.json({"valid":false});
        }else {
            res.json({"valid":true});
        }
    });
};

const checkLogin = (req, res, next) => {
    console.log(req.session);
    if (req.session.userName) {
        return res.json(
            new SuccessModel(req.session.userName)
        );
    }else{
        return res.json(
            new ErrorModel('not login')
        );
    }
};

const logout = (req, res, next) => {
    delete req.session.userName;
    if (req.session.userName){
        res.json(new ErrorModel("logout fail!"))
    } else{
        res.json(new SuccessModel("logout success!"))
    }
};

module.exports = {
    createUser,
    login,
    checkUserName,
    checkLogin,
    logout,
};