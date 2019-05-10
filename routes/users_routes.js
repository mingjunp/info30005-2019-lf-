const express = require('express');
const router = express.Router();
const {
    createUser,
    login,
    checkUserName,
    checkLogin,
} = require('../controllers/users_controller');

router.post('/createUser', createUser);

router.post('/login', login);

router.get('/checkUserName',checkUserName);

router.get('/checkLogin',checkLogin);

module.exports = router;