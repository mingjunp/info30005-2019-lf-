const Toilet = require("../models/toilet");
const Review = require("../models/review");
const User = require("../models/user");
const mongoose = require('mongoose');
const path = require('path');

module.exports.getAllToilets = function (req, res) {
    Toilet.find(function (err, toilets) {
        if (!err) {
            return res.json({errno: 0, data: toilets});
        } else {
            return res.json({errno: -1, message: "MongoDb Error!"});
        }
    });
};

module.exports.getById = function (req, res) {
    id = req.query.id;
    Toilet.findById(id, function (err, toilet) {
        if (err) {
            return res.json({errno: -1, message: "MongoDb Error!"})
        }
        else {
            return res.json({errno: 0, data: toilet});
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

//share my own toilet
module.exports.creatToilet = function (req, res) {

    /**
     * @return {string}
     */
    function YesOrNo(name) {
        if (name) {
            return 'yes';
        }
        return 'no';
    }

    /**
     * if no file return empty path
     * @param file
     * @returns {string}
     */
    function createFilePath(file) {
        if (!file) {
            return "";
        } else {
            return file.destination + file.filename;
        }
    }

    const toilet = new Toilet({
        "toiletPictures": createFilePath(req.file),
        "name": req.body.name,
        "operator": req.body.operator,
        "female": YesOrNo(req.body.female),
        "male": YesOrNo(req.body.male),
        "baby_facil": YesOrNo(req.body.baby_facil),
        "wheelchair": YesOrNo(req.body.wheelchair),
        "lat": req.body.lat,
        "lon": req.body.lon,
        "location_address": req.body.location_address,
        "location_city": req.body.location_city,
        "location_state": req.body.location_state,
        "location_zip": req.body.location_zip
    });

    toilet.save(function (err, newToilet) {
        if (!err) {
            // add the new toilet id to user toilets list
            User.update({userName: req.session.userName}, {$push: {toilets: newToilet._id}}, function (err, user) {
                if (!err) {
                    return res.json({errno: 0, data: newToilet});
                } else {
                    return res.json({errno: -1, message: "MongoDb Error!"});
                }
            });
        } else {
            return res.json({errno: -1, message: "MongoDb Error!"});
        }
    });
};

module.exports.updateToilet = function (req, res) {
    let id = req.body._id;
    let updateData = {
        "toiletPictures": req.body.toiletPictures,
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
    Toilet.updateOne({'_id': id}, updateData, function (err, updateToilet) {
        if (err) {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
        else {
            return res.json({errno: 0, data: updateToilet});
        }
    });
};

module.exports.deletToilet = function (req, res) {
    let id = req.body.id;
    Toilet.remove({'_id': id}, function (err, deletToilet) {
        if (err) {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
        else {
            return res.json({errno: 0, data: deletToilet});
        }
    });
};

module.exports.uploadToiletPhoto = function (req, res) {
    // no file
    if (!req.file) {
        res.json({ok: false});
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
    return res.json({errno: 0, data: req.file.destination + req.file.filename});
};

// load the images url based on toilet id
module.exports.loadToiletPictures = function (req, res) {

    let toiletPics = [];
    // use toilet ID to find all reviews and get their pics paths
    Toilet.findOne({_id: mongoose.Types.ObjectId(req.query['toiletID'])}, function (err, toilet) {
        if (!err) {
            if (toilet) {
                if (toilet.toiletPictures) {
                    toiletPics.push(toilet.toiletPictures);
                }

                // use toilet ID to find all reviews and get their pics paths
                Review.find({toiletID: req.query['toiletID']}, function (err, reviews) {
                    if (!err) {
                        if (reviews) {
                            reviews.map(function (review, index) {
                                // only push when review has a picture
                                if (review.reviewPictures) {
                                    toiletPics.push(review.reviewPictures);
                                }
                            });
                        }
                        return res.json({errno: 0, data: toiletPics});
                    } else {
                        return res.json({errno: -1, message: "MongoDb Error"});
                    }
                });

            }
        } else {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
    });
};

// get all toilets created by a specific user
module.exports.getUserToilets = function (req, res) {
    // find the user by user name
    User.find({userName: req.session.userName}, function (err, user) {
        if (!err) {
            // find all toilets in user toilets array
            Toilet.find({
                    _id: {
                        $in: user.toilets.map(function (item, index) {
                            return mongoose.Types.ObjectId(item);
                        })
                    }
                },
                function (err, toilets) {
                    if (!err) {
                        return res.json({errno: 0, data: toilets});
                    } else {
                        return res.json({errno: -1, message: "MongoDb Error"});
                    }
                });
        } else {
            return res.json({errno: -1, message: "MongoDb Error"});
        }
    });
};
