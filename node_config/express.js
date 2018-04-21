const config = require('./config');
const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport')
const methodOverride = require('method-override');

module.exports = function() {
    const app = express();

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(passport.initialize()); // Responsible for bootstrapping the Passport module.
    app.use(passport.session()); // To keep track of your user's session.

    app.use('/', express.static('public'))

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
