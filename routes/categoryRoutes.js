const express = require('express');
const RouterCategory = express.Router();
const loginMiddleware = require('../middleware/loginMiddleware');
const categoryController = require('../controller/categoryController');
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterCategory.post('/add-category',loginMiddleware.userProfile, categoryController.createCategory);
RouterCategory.get('/getcategory',loginMiddleware.userProfile,categoryController.getCategory);
RouterCategory.put('/update-category/:id', loginMiddleware.userProfile, categoryController.updateCategory);
RouterCategory.delete('/delete-category/:id', loginMiddleware.userProfile, categoryController.deleteCategory);

module.exports = RouterCategory;