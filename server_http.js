const express = require('express');
const app = express();
const http_port = 4201;

// set up a route to redirect http to https
app.get('*', function(req, res) { 
    console.log('redirecting to https');
    res.redirect("https://flipcard.io" + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

app.listen(http_port);
console.log('https Server started on port %d', http_port);
