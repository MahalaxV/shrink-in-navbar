// server.js
// load the things we need
var express = require('express');
var app = express();

app.use(express.static('public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page
app.get('/', function(req, res) {
    res.render('pages/index');
});

// about page
app.get('/about', function(req, res) {
    res.render('pages/about');
});

app.listen(process.env.PORT || 3003);
console.log('3003 is the magic port');
