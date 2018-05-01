const users = require('../controllers/users.server.controller'); 
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../../node_config/config');

module.exports = function(app) {
    app.route('/auth/signup')
        .post(users.signup);
    
    app.post('/auth/signin', function(req, res, next){
        passport.authenticate('local', function(err, user, info){
            if(err){
                console.log(err)
                res.status(400).json({ 
                    message: err.message
                });
            } 
            const token = jwt.sign(req.body.username, config.sessionSecret);
            console.log('authentication has been successful');
            res.status(200).json({ 
                jwt: token
            });
        })
    })

    // app.route('/auth/signin')
    //     .post(passport.authenticate('local'), 
    //         function(req, res) {
    //             console.log(err)
    //             if(err){
    //                 res.status(400).json({ 
    //                     message: err.message
    //                 });
    //             }
    //             console.log('authentication has been successful');
    //             const token = jwt.sign(req.body.username, config.sessionSecret);

    //             res.status(200).json({ 
    //                 jwt: token
    //             });
    //         }
    //     )
};