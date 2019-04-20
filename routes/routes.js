const express = require("express");
const router = express.Router();
const controller_toilets = require("../controllers/controller_toilets");
const controller_users = require("../controllers/controller_users");
const controller_reviews = require("../controllers/controller_reviews");

//find all toilet
router.get('/getToilet',controller_toilets.getToilet);

//get create page
//router.get('/createToilet',function (req,res) {
    //res.render('createToilet.pug');
//});
//post toilet
router.post('/createToilet', controller_toilets.createToilet);



//find all user
router.get('/getUser',controller_users.getUser);

//get create page
// router.get('/createToilet',function (req,res) {
//     res.render('createToilet.pug');
// });
//post user
router.post('/createUser', controller_users.createUser);



//find all review
router.get('/getReview',controller_reviews.getReview);

//get create page


//post review
router.post('/createReview', controller_reviews.createReview);


router.get('/test', controller_toilets.autoSearch);


module.exports = router;

