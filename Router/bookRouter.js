var express = require('express');
var Book = require('../models/bookModel');

var router = function () {
    var bookRouter = express.Router();

    bookRouter.route('/Book')
        .post( function (req, res) {
            var book = new Book(req.body);

            book.save();
            res.status(201).send(book);
        })
        .get(function (req, res) {
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

    bookRouter.route('/Book/:bookId').get(function (req, res) {
        console.log(req.params.bookId);
        Book.findById(req.params.bookId, function (err, book) {
            if(err){
                res.status(500).send(err);
            } else {
                res.json(book)
            }

        })
    });
    
    return bookRouter;
};

module.exports = router;