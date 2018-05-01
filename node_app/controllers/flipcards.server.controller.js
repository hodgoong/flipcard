const Flipcard = require('mongoose').model('Flipcard');
const jwt = require('jsonwebtoken')

/*
* getErrorMessage() returns a unified error message from a Mongoose error object.
*/
function getErrorMessage(err) {
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'flipcard already exists';
                break;
            default:
                message = 'Something went wrong';
        }
    } else {
        for (var errName in err.errors) {
            if (err.errors[errName].message) {
                message = err.errors[errName].message;
            }
        }
    }
    return message;
};

exports.create = function (req, res, next) {
    console.log('creating new flipcard in the database');
    console.log(req.body);
    const flipcard = new Flipcard(req.body);
    flipcard.isRemoved = false;
    console.log(flipcard)
    console.log("saving");
    flipcard.save((err, doc) => {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            console.log("sending response");
            res.status(200).json(doc);
            console.log(doc);
        }
    });
}

exports.remove = function (req, res, next) {
    console.log('removing flipcard from the database : ' + req.query._id);

    Flipcard.find({ _id: req.query._id }, function (err, data) {
        if (err) {
            console.log(err);
            return next(err);
        } else {
            data.isRemoved = true;
            console.log('remove succeed');
            res.status(200).json({status:200})
        }
    })
}

exports.get = function (req, res, next) {
    console.log('retrieving flipcards for specific user from the database');
    Flipcard.find({'username':req.body.username, 'isRemoved':false}, function (err, data) {
        if (err) {
            return next(err);
        } else {
            console.log(data);
            //TODO: shuffle function here

            res.status(200).json(data);
        }
    });
}

exports.getShuffled = function (req, res, next) {
    console.log('retrieving shuffled flipcards for specific user from the database');
    Flipcard.find({'username':req.body.username, 'isRemoved':false}, function (err, data) {
        if (err) {
            return next(err);
        } else {
            let shuffeledData = shuffle(data);
            var result = [];
            i = 0;
            for (let card of shuffeledData) {
                card["index"] = i;
                result.push(card);
                i = i + 1;
            }
            console.log(result);
            res.status(200).json(result);
        }
    });
}

exports.modify = function (req, res, next) {
    console.log('modifying the flipcard: ' + req.body.name);
    const flipcard = new Flipcard(req.body);
    console.log(flipcard);
    flipcard.update(
        { id: flipcard.id },
        flipcard,
        { upsert: true, new: true, runValidators: true },
        function (err) {
            if (err) {
                console.error('ERROR occurred while saving the data');
            } else {
                res.status(200);
            }
        }
    );
}

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}
