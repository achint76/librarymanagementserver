const express = require('express');
const userController = require('../controller/userController');
const RouterUser = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterUser.post('/add-user', userController.createUser);
RouterUser.get('/getuser', userController.getUser);
//RouterUser.put('/update-user/:id');
RouterUser.delete('/delete-user/:id', userController.deleteUser);

module.exports = RouterUser;