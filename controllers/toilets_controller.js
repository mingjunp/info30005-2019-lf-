const toilet = require("../models/toilets");
const { SuccessModel, ErrorModel } = require('../models/resModel');

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
    }
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

module.exports = {
    getAllToilets,
    creatToilet,
    getById,
    updateToilet,
    deletToilet,
};