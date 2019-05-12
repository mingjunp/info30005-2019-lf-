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




//user log in function
module.exports.login = function (req, res) {
	
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
module.exports.logout = function(req, res) {
	delete req.session.userName;
	if (req.session.userName){
		console.log("logout fail!");
	}else {
		console.log("logout successfully!");
	}
};


//user sign up function
module.exports.createUser = function(req, res) {
	
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
module.exports.checkLogin = function(req, res) {
	console.log(req.session);
	if(req.session.userName) {
		console.log("login successfully");
	}else{
		console.log("not login");
	}
};
module.exports.checkUserName = function(req, res){
	userName = req.query.userName;
	user.find({"userName":userName},(err, user) =>{
		if (err) res.json(new ErrorModel("Mongodb Error!"));
		if (user.length > 0) {
			res.json({"valid":false});
		}else {
			res.json({"valid":true});
		}
	});
}






						
