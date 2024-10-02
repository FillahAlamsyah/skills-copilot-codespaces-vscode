// Create web server
var express = require('express');
var app = express();
// Create a route for comments
app.get('/comments', function(req, res){
    res.send('This is the comments page');
});
// Start the server on port 3000
app.listen(3000, function(){
    console.log('Server started on port 3000');
});