const User = require('mongoose').model('User');
const passport = require('passport');

/*
* getErrorMessage() returns a unified error message from a Mongoose error object.
*/
function getErrorMessage(err) {
    let message = '';

    if (err.code) {
        switch (err.code) {
            case 11000:
            case 11001:
                message = 'Username already exists';
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


exports.signup = function(req, res, next) {
    console.log(req.body);

    if (!req.user) {
        const user = new User(req.body);
        user.provider = 'local';

        user.save((err) => {
            if (err) {
                const message = getErrorMessage(err);
                console.log(message);
                return res.redirect('/');
            }
            console.log('saving done');

            res.status(200).json({message:"New id has been created. Please sign in."});
        });

    } else {
        return res.redirect('/');
    }
}

exports.signout = function(req, res) {
    req.logout();
    res.redirect('/');
}

exports.create = function(req, res, next) {
    const user = new User(req.body);

    user.save((err) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(user);
        }
    });
}

exports.list = function(req, res, next) {
    User.find({}, 'username email', {
        limit: 10
    }, (err, users) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(users);
        }
    });
};

exports.read = function(req, res) {
    res.json(req.user);
}

//check if the id exists and if exists, pass an error
exports.userByID = function(req, res, next, id) {
    User.findOne({
        _id: id
    }, (err, user) => {
        if (err) {
            return next(err);
        } else {
            req.user = user;
            next();
        }
    });
};

exports.update = function(req, res, next) {
    User.findByIdAndUpdate(req.user.id, req.body, {
        'new': true
    }, (err, user) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(user);
        }
    });
};

exports.delete = function(req, res, next) {
    req.user.remove(err => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json(req.user);
        }
    });
};

exports.sessionCheck = function(req, res, next) {
    if (req.session.lastVisit) {
        console.log(req.session.lastVisit);
    }

    req.session.lastVisit = new Date();

    if (req.user) {
        return res.status(200).json({
            sessionInfo: req.session
        });
    } else {
        return res.status(401).json({
            error: 'User not authenticated'
        });
    }
};