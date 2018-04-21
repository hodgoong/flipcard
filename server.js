const express = require('express');
const http = require('http');

const configureMongoose = require('./node_config/mongoose');
const configureExpress = require('./node_config/express');
const configurePassport = require('./node_config/passport');

const db = configureMongoose();
const app = configureExpress();
const passport = configurePassport();

app.listen(4202)