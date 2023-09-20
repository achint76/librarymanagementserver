const express = require('express');
const RouterBookdetails = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterBookdetails.post('/add-bookdetails');
RouterBookdetails.get('/getbookdetails');
RouterBookdetails.put('/update-bookdetails/:id');
RouterBookdetails.delete('/delete-bookdetails/:id');

module.exports = RouterBookdetails;