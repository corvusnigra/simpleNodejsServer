var express = require('express'),
    mongoose = require('mongoose'),
    bodyParser = require('body-parser');


var app = express();

var db = mongoose.connect('mongodb://corvus:Nsbiou00@ds159497.mlab.com:59497/book-api');

var Book = require('./models/bookModel');

var bookRouter = require('./Router/bookRouter')();




var port = process.env.port || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/api', bookRouter);


app.get('/', function (req, res) {
    res.send('Добро пожаловать!');
});

app.listen(port, function () {
    console.log('Сервер запущен на порту' + port)
});