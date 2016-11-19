var express = require('express');

var app = express();

var port = process.env.port || 3000;

app.get('/',function (req, res) {
    res.send('Добро пожаловать!');
});

app.listen(port,function () {
    console.log('Сервер запущен на порту' + port)
});