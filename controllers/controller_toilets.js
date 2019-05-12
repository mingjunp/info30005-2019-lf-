const Toilet = require("../models/toilet");
const FuzzySearch = require('fuzzy-search');

module.exports.getToilet = function (req, res) {
    Toilet.find(function (err, toilets) {
        if (!err) {
            res.send(toilets);
        } else {
            res.sendStatus(404);
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


<<<<<<< HEAD
=======

>>>>>>> sddua
module.exports.createToilet = function (req, res) {
    const toilet = new Toilet({
        "userName": req.body.userName,
        "toiletName": req.body.toiletName,
        "toiletPicture": req.body.toiletPicture,
        "location": {
            "type": "Point",
            "coordinates": req.body.location.coordinates,
        },
        "female": req.body.female,
        "male": req.body.male,
        "wheelchair": req.body.wheelchair,
        "babyFacil": req.body.babyFacil,
        "shower": req.body.shower,
        "aveRating": req.body.aveRating
    });

    // test example
    // {
    //     "userName": "username",
    //     "toiletName": "toiletName",
    //     "toiletPicture": "109900898",
    //     "location": {
    //     "type": "Point",
    //         "coordinates": [-37.792, 144.962]
    //      },
    //     "female": "yes",
    //     "male": "yes",
    //     "wheelchair":"yes",
    //     "babyFacil": "yes",
    //     "shower": "yes",
    //     "aveRating": 4.0
    // }
    //
    toilet.save(function (err, newToilet) {
        if (!err) {
            res.send(newToilet);
        } else {
            res.sendStatus(400);
        }
    });
};


<<<<<<< HEAD
=======
//share my own toilet
module.exports.shareMyToilet = function (req, res) {
 	const toilet = new Toilet({
        "userName": req.body.userName,
        "toiletName": req.body.toiletName,
        "toiletPicture": req.body.toiletPicture,
        "location": {
            "type": "Point",
            "coordinates": req.body.location.coordinates,
        },
        "female": req.body.female,
        "male": req.body.male,
        "wheelchair": req.body.wheelchair,
        "babyFacil": req.body.babyFacil,
        "shower": req.body.shower
    });

    toilet.save(function (err, newToilet) {
        if (!err) {
            res.send(newToilet);
        } else {
            res.sendStatus(400);
        }
    });
};


>>>>>>> sddua

