//ref : https://medium.com/@yash.kulshrestha/using-lets-encrypt-with-express-e069c7abe625

const debug = require('debug')('mean-app:server');
const http = require('http');
const https = require('https');
const fs = require('fs');

const configureMongoose = require('./node_config/mongoose');
const configureExpress = require('./node_config/express');
const configurePassport = require('./node_config/passport');

const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();

//const http_port = 4201;
const https_port = 4202;


// app.set('port', port);

//http.createServer(app).listen(http_port);

// Create https server & run
https.createServer({
    key: fs.readFileSync('/usr/src/app/cert/privkey.pem'),
    cert: fs.readFileSync('/usr/src/app/cert/fullchain.pem')
}, app).listen(https_port, function() {
    console.log('https Server started on port %d', https_port);
});

