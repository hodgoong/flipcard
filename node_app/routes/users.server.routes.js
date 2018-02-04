const users = require('../controllers/users.server.controller'); 
const passport = require('passport');

module.exports = function(app) {
    app.route('/api/signup-here')
        .post(users.signup);
    
    app.route('/api/login')
        .post(passport.authenticate('local'), 
            function(req, res) {
                console.log('authentication has been successful');
                res.status(200).json({ 
                    status: "request sucessful",
                    user: req.user
                });
            }
        )
        .get(users.sessionCheck)

        // /*
        // * To check if the request is sent properly
        // */
        // .post((req) => (console.log(req.body)));
};


