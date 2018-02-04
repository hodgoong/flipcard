const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('mongoose').model('User');

module.exports = function() {
    console.log('local strategy triggered');
    passport.use(new LocalStrategy(
        (username, password, done) => { 
            User.findOne({
                username: username
            }, (err, user) => {
                if (err) {
                    console.log('Error: unknown error has been thrown during the authentication process');
                    return done(err);
                }

                if (!user) {
                    console.log('Error: cannot find the username in the database');
                    return done(null, false, {
                        message: 'Unknown user'
                    });
                }

                if (!user.authenticate(password)) {
                    console.log('Error: invalid password');
                    return done(null, false, {
                        message: 'Invalid password'
                    });
                }

                return done(null, user);
            });
    }));
}