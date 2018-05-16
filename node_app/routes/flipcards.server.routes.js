const flipcards = require('../controllers/flipcards.server.controller'); 
const config = require('../../node_config/config')
const jwt = require('express-jwt');
const auth = jwt({secret:config.sessionSecret})

module.exports = function(app) {
    app.route('/api/add-new-flipcard')
        //.post((req) => (console.log(req.body)))
        .post(auth, flipcards.create);

    app.route('/api/remove-flipcard')
        //.post((req) => (console.log(req.body)))
        .get(auth, flipcards.remove);

    app.route('/api/modify-flipcard')
        //.post((req) => (console.log(req.body)))
        .post(auth, flipcards.modify);

    app.route('/api/get-flipcard')
        .get(auth, flipcards.get);

    app.route('/api/get-flipcard-shuffle')
        .post(auth, flipcards.getShuffled);
        
        
        // /*
        // * To check if the request is sent properly
        // */
        // .post((req) => (console.log(req.body)));
};
