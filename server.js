const express = require('express');
const http = require('http');

const configureMongoose = require('./node_config/mongoose');
const configureExpress = require('./node_config/express');

const db = configureMongoose();
const app = configureExpress();

app.listen(8000)