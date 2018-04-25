// set up plain http server
var http = express.createServer();

// set up a route to redirect http to https
http.get('*', function(req, res) {  
    res.redirect('https://flipcard.io' + req.url);

    // Or, if you don't want to automatically detect the domain name from the request header, you can hard code it:
    // res.redirect('https://example.com' + req.url);
})

http.listen(4201);