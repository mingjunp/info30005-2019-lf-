const express = require('express');
const router = express.Router();
const {
    setLike,
    getByUserToilet,
} = require('../controllers/likes_controller');


router.get('/setLike', setLike);
router.get('/getByUserToilet', getByUserToilet);

module.exports = router;