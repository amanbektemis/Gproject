var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set('view engine', 'ejs');

app.use('/public', express.static('public'));

app.get('/', function(req, res){
    res.render('index');
});

app.get('/about', function(req, res){
    res.render('about');
});
app.post('/about', urlencodedParser, function(req, res){
    console.log(req.body);
    res.render('about-success', {data: req.body});
});

app.get('/404', function(req, res){
    res.render('404');
});

app.get('/news/:id', function(req, res){
    var obj = {title: "JANALYQTAR", id: 19};
    var carModels = {models:['Toyota','Mazda', 'Subaru', 'Mercedes', 'Qaisar']};
    console.log(req.query);
    res.render('news', {newsID: req.params.id, obj:obj, carModels:carModels});
});



app.listen(4000);