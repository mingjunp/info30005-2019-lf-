const express = require("express");
const router = express.Router();

const multer = require('multer');
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname + '/uploads/images');
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now())
    }
});
const upload = multer({storage: storage});

const controller_toilets = require("../controllers/controller_toilets");
const controller_users = require("../controllers/controller_users");
const controller_reviews = require("../controllers/controller_reviews");
const controller_likes = require("../controllers/controller_likes");




<<<<<<< HEAD
//find all user
router.get('/getUser', controller_users.getUser);
//get create page
//post user
router.post('/createUser', controller_users.createUser);


//find all review
router.get('/getReview', controller_reviews.getReview);
//get create page
router.get('/createReview', function (req, res) {
    res.sendfile('./public/HTML/reviewTest.html');
});
//post review
router.post('/createReview', upload.single('reviewPictures'), controller_reviews.createReview);
=======
// get create page

//post toilet
router.post('/createToilet', controller_toilets.createToilet);
>>>>>>> sddua

//load reviews of certain toilet
router.get('/loadReviews', controller_reviews.loadReviews);


//find all toilet
router.get('/getToilet', controller_toilets.getToilet);

<<<<<<< HEAD
// get create page

//post toilet
router.post('/createToilet', controller_toilets.createToilet);
=======
//get create page

//post user
router.post('/createUser', controller_users.createUser);

//user login
router.post('/userLogin', controller_users.userLogin);

//user logout
router.get('/userLogout', controller_users.userLogout);

//user signup
router.post('/userSignUp', controller_users.userSignUp);

//check login
router.get('/checkLogin', controller_users.checkLogin);
>>>>>>> sddua

// searching and sorting based on current location
router.get('/autoSearch', controller_toilets.autoSearch);

// based on searching box content & "Check Detail" linked
router.get('/contentSearch', controller_toilets.contentSearch);

// searching and sorting by key words
router.get('/keywordSearch', controller_toilets.keywordSearch);

<<<<<<< HEAD

// router.get('/', controller_toilet.);

// map homepage.html to '/' path
router.get('/', function (req, res) {
    res.sendfile('./public/HTML/homepage.html');
});
// map toiletpage.html to '/toiletDetail' path
router.get('/toiletDetail', function (req, res) {
    res.sendfile('./public/HTML/toiletpage.html');
=======
//get create page


//post review
router.post('/createReview', controller_reviews.createReview);

//load reviews of certain toilet
router.get('/loadReviews', controller_reviews.loadReviews);


// map homepage.html to '/' path
router.get('/',function (req, res) {
    res.sendfile('./public/HTML/homepage.html');
>>>>>>> sddua
});
// map toiletpage.html to '/toiletDetail' path
router.get('/toiletDetail',function (req, res) {
    res.sendfile('./public/HTML/toiletpage.html');
});


// searching and sorting based on current location
router.get('/autoSearch', controller_toilets.autoSearch);

// based on searching box content & "Check Detail" linked
router.get('/contentSearch', controller_toilets.contentSearch);

// searching and sorting by key words
router.get('/keywordSearch', controller_toilets.keywordSearch);

//share my own toilet
router.post('/shareMyToilet', controller_toilets.shareMyToilet);



//like toilet
router.get('/setLike', controller_likes.setLike);


// router.get('/', controller_toilet.);

module.exports = router;

