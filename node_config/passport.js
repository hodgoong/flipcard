const passport = require('passport');
const mongoose = require('mongoose');

module.exports = function() {
    const User = mongoose.model('User');

    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.findOne({
            _id: id
        }, '-password -salt', (err, user) => {
            done(err, user);
        });
    });

    require('./strategies/local.js')();
}