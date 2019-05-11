const toilet = require("../models/toilets");
const { SuccessModel, ErrorModel } = require('../models/resModel');
const fs = require('fs');
const path = require('path');

const getAllToilets = (req, res, next) => {
    toilet.find((err, toilets) => {
        if (err) res.json(new ErrorModel("Mongodb Error!"));
        res.json(new SuccessModel(toilets));
    });
};

const getById = (req, res, next) => {
    id = req.query.id;
    toilet.findById(id, (err, toilet) =>{
        if (err) return res.json(new ErrorModel("Mongodb Error!"));
        return res.json(new SuccessModel(toilet));
    });
};

const creatToilet = (req, res, next) =>{
    const newToilet = new toilet({
        "name": req.body.name,
        "operator": req.body.operator,
        "female": req.body.female,
        "male": req.body.male,
        "baby_facil": req.body.baby_facil,
        "wheelchair": req.body.wheelchair,
        "lat": req.body.lat,
        "lon": req.body.lon,
        "location_address": req.body.location_address,
        "location_city": req.body.location_city,
        "location_state": req.body.location_state,
        "location_zip": req.body.location_zip,
        "rate": req.body.rate
    });
    newToilet.save((err, newToilet) => {
        if (err) res.json(new ErrorModel('Mongodb Error!'));
        res.json(new SuccessModel(newToilet));
    });
};

const  updateToilet = (req, res, next) => {
    id = req.body._id;
    updateData = {
        "name": req.body.name,
        "operator": req.body.operator,
        "female": req.body.female,
        "male": req.body.male,
        "baby_facil": req.body.baby_facil,
        "wheelchair": req.body.wheelchair,
        "lat": req.body.lat,
        "lon": req.body.lon,
        "location_address": req.body.location_address,
        "location_city": req.body.location_city,
        "location_state": req.body.location_state,
        "location_zip": req.body.location_zip,
        "rate": req.body.rate
    };
    toilet.updateOne({'_id': id}, updateData, (err, updateToilet) => {
        if (err) res.json(new ErrorModel('Mongodb Error!'));
        res.json(new SuccessModel(updateToilet));
    });
};

const deletToilet = (req, res, next) => {
    id = req.body.id;
    toilet.remove({'_id': id}, (err, deletToilet) => {
        if (err) res.json(new ErrorModel('Mongodb Error!'));
        res.json(new SuccessModel(deletToilet));
    });
};

const uploadToiletPhoto = (req, res, next) => {
    // no file
    if (!req.file) {
        res.json({ ok: false });
        return;
    }
    // output file info
    console.log('====================================================');
    console.log('fieldname: ' + req.file.fieldname);
    console.log('originalname: ' + req.file.originalname);
    console.log('encoding: ' + req.file.encoding);
    console.log('mimetype: ' + req.file.mimetype);
    console.log('size: ' + (req.file.size / 1024).toFixed(2) + 'KB');
    console.log('destination: ' + req.file.destination);
    console.log('filename: ' + req.file.filename);
    console.log('path: ' + req.file.path);
    return res.json(new SuccessModel(req.file.destination+req.file.filename));
};

module.exports = {
    getAllToilets,
    creatToilet,
    getById,
    updateToilet,
    deletToilet,
    uploadToiletPhoto,
};