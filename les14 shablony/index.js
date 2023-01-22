var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + "index.html");
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + "about.html");
});

app.get('/404', function(req, res){
    res.sendFile(__dirname + "404.html");
});

app.get('/news/:id', function(req, res){
    var obj = {title: "JANALYQTAR", id: 19};
    var carModels = {models:['Toyota','Mazda', 'Subaru', 'Mercedes', 'Qaisar']};
    res.render('news', {newsID: req.params.id, obj:obj, carModels:carModels});
});



app.listen(4000);