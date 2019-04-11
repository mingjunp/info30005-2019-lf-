const express = require("express");
const router = express.Router();
const controller = require("../controllers/controller_toilets");


router.get('/findall',controller.findAll); //find all toilets

// router.get('/',function (req,res) {
//     res.sendFile( "/public/homepage.html");
// });

module.exports = router;

