const express = require('express');
const router = express.Router();
const {
    getAllToilets,
    creatToilet,
    getById,
    updateToilet,
    deletToilet,
    uploadToiletPhoto,
} = require('../controllers/toilets_controller');
const multer = require('multer');


const storage = multer.diskStorage({
    destination:'./public/uploads/',
    filename(req,file,cb){
        const filenameArr = file.originalname.split('.');
        cb(null,Date.now() + '.' + filenameArr[filenameArr.length-1]);
    }
});
const upload = multer({storage});

router.get('/getAllToilets', getAllToilets);

router.get('/getById', getById);

router.post('/creatToilet', creatToilet);

router.post('/updateToilet', updateToilet);

router.post('/deletToilet', deletToilet);

router.post('/uploadToiletPhoto',upload.single('test-upload') , uploadToiletPhoto);

module.exports = router;