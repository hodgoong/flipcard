const config = require('./config');
const express = require('express');
const morgan = require('morgan');
const compress = require('compression');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');
const passport = require('passport');
const path = require('path');
const forceSsl = require('express-force-ssl');
const helmet = require('helmet')

module.exports = function() {
    const app = express();
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan('dev'));
    } else if (process.env.NODE_ENV === 'production') {
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(express.static(path.join(__dirname, '../dist')));
    app.use('/shuffle', express.static(path.join(__dirname, '../dist')));
    app.use('/manage', express.static(path.join(__dirname, '../dist')));
    app.use('/insert', express.static(path.join(__dirname, '../dist')));

    app.use(session({
        saveUninitialized: true,
        resave: true,
        secret: config.sessionSecret
    }));

    app.use(passport.initialize()); // Responsible for bootstrapping the Passport module.
    app.use(passport.session()); // To keep track of your user's session.

    app.use(forceSsl);
    app.use(helmet());

    // Below code returns express instance, which is app, via reference.
    require('../node_app/routes/users.server.routes.js')(app);
    require('../node_app/routes/flipcards.server.routes.js')(app);

    // catch 404 and forward to error handler
    app.use(function(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });
  
    // error handler
    app.use(function(err, req, res, next) {
        // set locals, only providing error in development
        res.locals.message = err.message;
        res.locals.error = req.app.get('env') === 'development' ? err : {};
    
        // render the error page
        res.status(err.status || 500);
        res.render('error');
    });

    return app;
}
