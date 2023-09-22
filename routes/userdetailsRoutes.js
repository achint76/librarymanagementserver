const express = require('express');
const userdetailsController = require('../controller/userdetailsController');
const RouterUserdetails = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterUserdetails.post('/add-userdetails', userdetailsController.createUserdetails);
RouterUserdetails.get('/getuserdetails', userdetailsController.getUserdetails);
//RouterUserdetails.put('/update-userdetails/:id');
RouterUserdetails.delete('/delete-userdetails/:id', userdetailsController.deleteUserdetails);
module.exports = RouterUserdetails;