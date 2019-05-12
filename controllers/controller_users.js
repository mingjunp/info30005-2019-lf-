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
	console.log(req.body);
 	const user = new User({
        "userName":req.body.userName,
        "password":req.body.password,
       
    });
    user.save(function(err,newUser){
        if(!err){
            res.send(newUser);
        }else{
            res.sendStatus(400);
        }
    });
};


//user log in function
module.exports.userLogin = function (req, res, next) {
	
     User.findOne({
    	"userName": req.body.userName,
  	}).then(function (userInfo) {
    	 if (!userInfo) {
     	  	console.log("no such user!");
     	  	res.sendStatus(404);
      	  }else {
      	  	if(req.body.password != userInfo.password){
      	  		console.log("wrong password!");
      			res.sendStatus(404);
   	  		}else {
   	  			console.log("log in successfully!");
   	  			res.sendStatus(200);
   	  	  	 }
   	  	  }
   	  });
};


//logout function
module.exports.userLogout = function(req, res, next) {
	delete req.session.userName;
	if (req.session.userName){
		console.log("logout fail!");
	}else {
		console.log("logout successfully!");
	}
};


//user sign up function
module.exports.userSignUp = function(req, res, next) {
	
     User.findOne({
    	"userName": req.body.userName,
  	}).then(function (userInfo) {
	
		if(!userInfo) {
			// insert new user if they don't exist
			const user = new User({
        		"userName":req.body.userName,
        		"password":req.body.password,
    		});
    		user.save();
    		res.send(user);
			
		} else {
			console.log("That user already exists!");
			res.sendStatus(400);
    	}
    });
    
};

//check login
module.exports.checkLogin = function(req, res, next) {
	console.log(req.session);
	if(req.session.userName) {
		console.log("login successfully");
	}else{
		console.log("not login");
	}
};







						
