const express = require('express');
const userdetailService = require('../service/userdetailService');
const userdetailsController = require('../controller/bookdetailsController');
const bookdetailsController = require('../controller/bookdetailsController');
const inventoryController = require('../controller/inventoryController')
const loginMiddleware = require('../middleware/loginMiddleware');
const RouterBookdetails = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterBookdetails.post('/add-bookdetails',loginMiddleware.userProfile, bookdetailsController.createBookdetails, bookdetailsController.userbookissue);
RouterBookdetails.get('/getbookdetails', bookdetailsController.getBookdetails);
// RouterBookdetails.put('/update-bookdetails/:id');
RouterBookdetails.delete('/delete-bookdetails/:id', bookdetailsController.deleteBookdetails);
RouterBookdetails.put('/approved', loginMiddleware.userProfile, bookdetailsController.userbookissue);
RouterBookdetails.put('/returnbookapprroved', loginMiddleware.userProfile, bookdetailsController.userbookreturn);

RouterBookdetails.post('/clear-return-date',loginMiddleware.userProfile, bookdetailsController.clearReturnDate);

RouterBookdetails.put('/update-return-date', loginMiddleware.userProfile, bookdetailsController.updateReturnDate)
module.exports = RouterBookdetails;