const express = require('express');
const bookController = require('../controller/bookController');
const { getBook } = require('../service/bookService');
const RouterBooks = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterBooks.post('/add-book', bookController.createBook);
RouterBooks.get('/getbook', bookController.getBook);
//RouterBooks.put('/update-book/:id');
RouterBooks.delete('/delete-book/:id', bookController.deleteBook);

module.exports = RouterBooks;