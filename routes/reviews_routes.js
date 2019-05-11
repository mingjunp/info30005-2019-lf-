const express = require('express');
const router = express.Router();
const {
    createReview,
    getReviewsByToilet,
} = require('../controllers/reviews_controller');

router.post('/createReview', createReview);

router.get('/getReviewsByToilet', getReviewsByToilet);


module.exports = router;