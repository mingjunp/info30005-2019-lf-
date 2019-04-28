const express = require("express");
const router = express.Router();
const controller_toilets = require("../controllers/controller_toilets");
const controller_users = require("../controllers/controller_users");
const controller_reviews = require("../controllers/controller_reviews");

// map homepage.html to '/' path
router.get('/',function (req, res) {
    res.sendfile('./public/HTML/homepage.html');
});

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


router.get('/autoSearch', controller_toilets.autoSearch);

router.get('/contentSearch', controller_toilets.contentSearch);

router.get('/maleSearch', controller_toilets.maleSearch);

router.get('/femaleSearch', controller_toilets.femaleSearch);

router.get('/wheelchairSearch', controller_toilets.wheelchairSearch);

router.get('/babyFacilSearch', controller_toilets.babyFacilSearch);

router.get('/showerSearch', controller_toilets.showerSearch);

module.exports = router;

