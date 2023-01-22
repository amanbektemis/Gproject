var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send('Basty bet');
});

app.get('/about', function(req, res){
    res.send('Biz turaly');
});

app.get('/404', function(req, res){
    res.send('Ups, qate terdiniz!');
});

app.get('/news/:id', function(req, res){
    res.send('Janalyqtar! - '+req.params.id);
});



app.listen(4000);