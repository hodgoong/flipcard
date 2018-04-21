const flipcards = require('../controllers/flipcards.server.controller'); 
const config = require('../../node_config/config')
const jwt = require('express-jwt');
const auth = jwt({secret:config.sessionSecret})

module.exports = function(app) {
    app.route('/api/add-new-flipcard')
        //.post((req) => (console.log(req.body)))
        .post(flipcards.create);

    app.route('/api/remove-flipcard')
        //.post((req) => (console.log(req.body)))
        .get(flipcards.remove);

    app.route('/api/modify-flipcard')
        //.post((req) => (console.log(req.body)))
        .post(flipcards.modify);

    app.route('/api/get-flipcard')
        .get(flipcards.get);

    app.route('/api/get-flipcard-shuffle')
        .post(flipcards.getShuffled);
        
        
        // /*
        // * To check if the request is sent properly
        // */
        // .post((req) => (console.log(req.body)));
};
