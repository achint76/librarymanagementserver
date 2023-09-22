const express = require('express');
const userdetailService = require('../service/userdetailService');
const userdetailsController = require('../controller/bookdetailsController');
const RouterBookdetails = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterBookdetails.post('/add-bookdetails', userdetailsController.createBookdetails);
RouterBookdetails.get('/getbookdetails', userdetailsController.getBookdetails);
// RouterBookdetails.put('/update-bookdetails/:id');
RouterBookdetails.delete('/delete-bookdetails/:id', userdetailsController.deleteBookdetails);

module.exports = RouterBookdetails;