const express = require('express');
const https = require('https');
const fs = require('fs')

const configureMongoose = require('./node_config/mongoose');
const configureExpress = require('./node_config/express');
const configurePassport = require('./node_config/passport');

const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();

const https_port = 4202;

https.createServer({
    key: fs.readFileSync('/home/ubuntu/flipcard/cert/privkey.pem'),
    cert: fs.readFileSync('/home/ubuntu/flipcard/cert/fullchain.pem')
}, app).listen(https_port, function() {
    console.log('https Server started on port %d', https_port);
});
