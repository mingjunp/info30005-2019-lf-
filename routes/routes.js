const express = require("express");
const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename(req, file, cb) {
        const filenameArr = file.originalname.split('.');
        console.log(filenameArr);
        cb(null, Date.now() + '.' + filenameArr[filenameArr.length - 1]);
    }
});

const upload = multer({storage: storage});

const controller_toilets = require("../controllers/controller_toilets");
const controller_users = require("../controllers/controller_users");
const controller_reviews = require("../controllers/controller_reviews");
const controller_likes = require("../controllers/controller_likes");

//find all user
router.get('/api/users/getUser', controller_users.getUser);
//get create page

//post user
router.post('/api/users/createUser', controller_users.createUser);

//user login
router.post('/api/users/login', controller_users.login);

//user logout
router.get('/api/users/logout', controller_users.logout);

//check login
router.get('/api/users/checkLogin', controller_users.checkLogin);

router.get('/api/users/checkUserName', controller_users.checkUserName);

router.get('/api/users/userHomepage', function (req, res) {
    res.sendfile('./public/HTML/userHomepage.html');
});

//get create page
router.get('/api/reviews/createReview', function (req, res) {
    res.sendfile('./public/HTML/reviewTest.html');
});

//post review
router.post('/api/reviews/createReview', upload.single('reviewPictures'), controller_reviews.createReview);

// upload review picture
router.post('/api/reviews/uploadReviewPicture', upload.single('reviewPictures'), controller_reviews.uploadReviewPicture);

//load reviews of certain toilet
router.get('/api/reviews/getReviewsByToilet', controller_reviews.getReviewsByToilet);

// user creates a toilet, toiletPicture can be null
router.post('/api/toilets/creatToilet', upload.single('toiletPictures'), controller_toilets.creatToilet);

//find all toilet
router.get('/api/toilets/getAllToilets', controller_toilets.getAllToilets);

router.get('/api/toilets/getById', controller_toilets.getById);

// get toilets created by user
router.get('/api/toilets/getUserToilets', controller_toilets.getUserToilets);

// searching and sorting based on current location
router.get('/autoSearch', controller_toilets.autoSearch);

// searching and sorting by key words
router.get('/keywordSearch', controller_toilets.keywordSearch);

router.post('/api/toilets/updateToilet', controller_toilets.updateToilet);

router.delete('/api/toilets/deletToilet', controller_toilets.deletToilet);

router.post('/api/toilets/uploadToiletPhoto', upload.single('test-upload'), controller_toilets.uploadToiletPhoto);

// get all toilet pictures based on toilet ID
router.get('/api/toilets/loadToiletPictures', controller_toilets.loadToiletPictures);

// map homepage.html to '/' path
router.get('/', function (req, res) {
    res.sendfile('./public/HTML/homepage.html');
});
// map toiletpage.html to '/toiletDetail' path
router.get('/toiletDetail', function (req, res) {
    res.sendfile('./public/HTML/toiletpage.html');
//get create page
});

//like toilet
router.get('/api/likes/setLike', controller_likes.setLike);

router.get('/api/likes/getByUserToilet', controller_likes.getByUserToilet);
// get user collections
router.get('/api/likes/getUserCollections', controller_likes.getCollections);

module.exports = router;

