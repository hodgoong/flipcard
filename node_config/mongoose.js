const mongoose = require('mongoose');
const config = require('./config');

module.exports = function() {
    mongoose.Promise = Promise;

    const db = mongoose.connect(config.db, { promiseLibrary: global.Promise })
        .then(() =>  console.log('connection succesful'))
        .catch((err) => console.error(err));;
    
    require('../node_app/models/user.server.model');
    require('../node_app/models/flipcard.server.model');

    return db;
}