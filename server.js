var express = require('express'),
    mongoose = require('mongoose');


var db = mongoose.connect('mongodb://corvus:Nsbiou00@ds159497.mlab.com:59497/book-api');

var Book = require('./models/bookModel');


var app = express();

var port = process.env.port || 3000;

var bookRouter = express.Router();

bookRouter.route('/Book').get(function (req, res) {
    var query = req.query;
    console.log(query);
    Book.find(query, function (err, books) {
        if(err){
            res.status(500).send(err);
        } else {
            res.json(books)
        }

    })
});

app.use('/api', bookRouter);


app.get('/',function (req, res) {
    res.send('Добро пожаловать!');
});

app.listen(port,function () {
    console.log('Сервер запущен на порту' + port)
});