const Toilet = require("../models/toilet");


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


    let lng = parseFloat(req.body.lng);
    let lat = parseFloat(req.body.lat);
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


// based on searching box content & "Check Detail" linked
module.exports.contentSearch = function (req, res) {
    let content = req.body.content;
    //模糊搜索
};


// searching and sorting by key words
module.exports.maleSearch = function (req, res) {
    Toilet.find({male: 'yes'}, null, function (err, toilet) {
        if (!err) {
            res.send(toilet);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports.femaleSearch = function (req, res) {
    Toilet.find({female: 'yes'}, null, function (err, toilet) {
        if (!err) {
            res.send(toilet);
        } else {
            res.sendStatus(404);
        }
    });
};
module.exports.wheelchairSearch = function (req, res) {
    Toilet.find({wheelchair: 'yes'}, null, function (err, toilet) {
        if (!err) {
            res.send(toilet);
        } else {
            res.sendStatus(404);
        }
    });
};
module.exports.babyFacilSearch = function (req, res) {
    Toilet.find({babyFacil: 'yes'}, null, function (err, toilet) {
        if (!err) {
            res.send(toilet);
        } else {
            res.sendStatus(404);
        }
    });
};
module.exports.showerSearch = function (req, res) {
    Toilet.find({shower: 'yes'}, null, function (err, toilet) {
        if (!err) {
            res.send(toilet);
        } else {
            res.sendStatus(404);
        }
    });
};


module.exports.createToilet = function (req, res) {
    const toilet = new Toilet({
        "userName": req.body.userName,
        "toiletName": req.body.toiletName,
        "toiletPicture": req.body.toiletPicture,
        "location": {
            type: {type: "Point"},
            coordinates: [req.body.lng, req.body.lat],
        },
        "female": req.body.female,
        "male": req.body.male,
        "wheelchair": req.body.wheelchair,
        "babyFacil": req.body.babyFacil,
        "shower": req.body.shower,
        "aveRating": req.body.aveRating
    });

    // test example
    // const toilet = new Toilet({
    //     "userName": req.body.userName,
    //     "toiletName": req.body.toiletName,
    //     "toiletPicture": req.body.toiletPicture,
    //     "location": {
    //         "type": "Point",
    //         "coordinates": ["-37.793832", "144.968322"]
    //     },
    //     "female": req.body.female,
    //     "male": req.body.male,
    //     "wheelchair": req.body.wheelchair,
    //     "babyFacil": req.body.babyFacil,
    //     "shower": req.body.shower,
    //     "aveRating": req.body.aveRating
    // });

    //
    toilet.save(function (err, newToilet) {
        if (!err) {
            res.send(newToilet);
        } else {
            res.sendStatus(400);
        }
    });
};



