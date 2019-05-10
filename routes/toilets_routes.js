const express = require('express');
const router = express.Router();
const {
    getAllToilets,
    creatToilet,
    getById,
    updateToilet,
    deletToilet,
} = require('../controllers/toilets_controller');

router.get('/getAllToilets', getAllToilets);

router.get('/getById', getById);

router.post('/creatToilet', creatToilet);

router.post('/updateToilet', updateToilet);

router.post('/deletToilet', deletToilet);

module.exports = router;