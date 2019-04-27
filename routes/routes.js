const express = require("express");
const router = express.Router();
const controller_toilets = require("../controllers/controller_toilets");
const controller_users = require("../controllers/controller_users");
const controller_reviews = require("../controllers/controller_reviews");

//find all toilet
router.get('/getToilet',controller_toilets.getToilet);

// get create page

//post toilet
router.post('/createToilet', controller_toilets.createToilet);



//find all user
router.get('/getUser',controller_users.getUser);

//get create page

//post user
router.post('/createUser', controller_users.createUser);



//find all review
router.get('/getReview',controller_reviews.getReview);

//get create page


//post review
router.post('/createReview', controller_reviews.createReview);

// searching and sorting based on current location
router.get('/autoSearch', controller_toilets.autoSearch);

// based on searching box content & "Check Detail" linked
router.get('/contentSearch', controller_toilets.contentSearch);

// searching and sorting by key words
router.get('/keywordSearch', controller_toilets.keywordSearch);


// router.get('/', controller_toilet.);

module.exports = router;

