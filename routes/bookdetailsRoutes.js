const express = require('express');
const userdetailService = require('../service/userdetailService');
const userdetailsController = require('../controller/bookdetailsController');
const bookdetailsController = require('../controller/bookdetailsController');
const loginMiddleware = require('../middleware/loginMiddleware');
const RouterBookdetails = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterBookdetails.post('/add-bookdetails',loginMiddleware.userProfile, bookdetailsController.createBookdetails, bookdetailsController.userbookissue);
RouterBookdetails.get('/getbookdetails', bookdetailsController.getBookdetails);
// RouterBookdetails.put('/update-bookdetails/:id');
RouterBookdetails.delete('/delete-bookdetails/:id', bookdetailsController.deleteBookdetails);
RouterBookdetails.put('/approved', loginMiddleware.userProfile, bookdetailsController.userbookissue);
module.exports = RouterBookdetails;