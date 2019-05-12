const Toilet = require("../models/toilet");
const FuzzySearch = require('fuzzy-search');
const path = require('path');

module.exports.getAllToilets = function (req, res) {
    Toilet.find(function (err, toilets) {
        if (!err) {
            return res.json({errno: 0, data:toilets});
        } else {
            return res.json({errno: -1, message: "MongoDb Error!"});
        }
    });
};

module.exports.getById = function(req, res){
    id = req.query.id;
    Toilet.findById(id, function (err, toilet) {
        if (err) {
            return res.json({errno: -1, message: "MongoDb Error!"})
        }
        else{
            return res.json({errno: 0, data:toilet});
        }

    });
};

// searching and sorting based on current location
module.exports.autoSearch = function (req, res) {

    let constraintSearch = function (lng, lat, maxDistance) {

        if ((!lng && lng !== 0) || (!lat && lat !== 0) || !maxDistance) {
            console.log('locationsListByDistance missing params');
            return [];
        }

        let geoOptions = [{
            $geoNear: {
                near: {type: "Point", coordinates: [lng, lat]},
                distanceField: "dist.calculated",
                maxDistance: maxDistance,
                spherical: true
            }
        }];

        Toilet.aggregate(geoOptions).then(function (err, results) {
            if (err) {
                console.log('geoNear error:', err);
                return [];
            } else {
                console.log("result");
                console.log(results);
                return results;
            }
        });
    };


    let lng = parseFloat(req.query.lng);
    let lat = parseFloat(req.query.lat);
    //let lng = -37.792820;
    //let lat = 144.969070;
    let maxDistance = 1000;
    let result = constraintSearch(lng, lat, maxDistance);
    if (result !== []) {
        res.send(result);
    } else if (result === []) {
        maxDistance = 5000;
        result = constraintSearch(lng, lat, maxDistance);
        if (result !== []) {
            res.send(result);
        } else {
            res.send([]);
        }
    }
};

// searching and sorting by key words
module.exports.keywordSearch = function (req, res) {
    let keywords = {};
    for (let key of Object.keys(req.query)) {
        if (req.query[key] === 'true') {
            keywords[key] = 'yes';
        }
    }

    Toilet.find(keywords, null, function (err, toilets) {
        if (!err) {
            res.send(toilets);
        } else {
            res.sendStatus(404);
        }
    });
};


// based on searching box content & "Check Detail" linked
module.exports.contentSearch = function (req, res) {
    let toiletName = req.query.toiletName;
    Toilet.find(function (err, toilets) {
        if (!err) {
            const searcher = new FuzzySearch(toilets, ['toiletName'], {
                caseSensitive: false,
            });
            const result = searcher.search(toiletName);

            res.send(result);
        } else {
            res.sendStatus(404);
        }
    });
};

    // test example
// {       "toiletPicture": "toiletPicture",
//     "name": "name",
//     "operator": "re",
//     "female": "yes",
//     "male": "yes",
//     "baby_facil": "yes",
//     "wheelchair":"yes",
//     "lat": -88,
//     "lon": -94,
//     "location_address": "toiletPicture",
//     "location_city": "toiletPicture",
//     "location_state":"toiletPicture",
//     "location_zip": "toiletPicture"
//
// }
    //


//share my own toilet
module.exports.creatToilet = function (req, res) {
 	const toilet = new Toilet({
        "toiletPicture": req.body.toiletPicture,
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
        "location_zip": req.body.location_zip
    });

    toilet.save(function (err, newToilet) {
        if (!err) {
            return res.json({errno: 0, data: newToilet});
        } else {
            return res.json({errno: -1, message: "MongoDb Error!"});
        }
    });
};

module.exports.updateToilet = function(req, res) {
    id = req.body._id;
    updateData = {
        "toiletPicture": req.body.toiletPicture,
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

    };
    Toilet.updateOne({'_id': id}, updateData, function(err, updateToilet) {
        if (err){
            return res.json({errno: -1, message: "MongoDb Error"});
        }
        else{
            return res.json({errno: 0, data:updateToilet});
        }
    });
};

module.exports.deletToilet = function(req, res){
    id = req.body.id;
    Toilet.remove({'_id': id}, function(err, deletToilet){
        if (err){
            return res.json({errno: -1, message: "MongoDb Error"});
        }
        else{
            return res.json({errno: 0, data:deletToilet});
        }
    });
};

module.exports.uploadToiletPhoto = function(req, res){
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
    return res.json({errno: 0, data: req.file.destination+req.file.filename});
};

