const express = require('express');
const RouterUserdetails = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterUserdetails.post('/add-userdetails');
RouterUserdetails.get('/getuserdetails');
RouterUserdetails.put('/update-userdetails/:id');
RouterUserdetails.delete('/delete-userdetails/:id');

module.exports = RouterUserdetails;