const express = require('express');
const RouterCategory = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterCategory.post('/add-category');
RouterCategory.get('/getcategory');
RouterCategory.put('/update-category/:id');
RouterCategory.delete('/delete-category/:id');

module.exports = RouterCategory;