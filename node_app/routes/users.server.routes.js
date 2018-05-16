const users = require('../controllers/users.server.controller'); 
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../node_config/config');

module.exports = function(app) {
    app.route('/auth/signup')
        .post(users.signup);
    
    app.route('/auth/signin')
        // .post((req)=>(console.log(req.body)))
        .post(passport.authenticate('local'), 
            //TODO: capture the error
            function(req, res) {
                // console.log(err)
                // if(err){
                //     res.status(400).json({ 
                //         message: err.message
                //     });
                // }
                console.log('authentication has been successful');
                const token = jwt.sign(req.body.username, config.sessionSecret);

                res.status(200).json({ 
                    jwt: token
                });
            }
        )

        /*
        * To check if the request is sent properly
        */
        .post((req) => (console.log(req.body)));
};