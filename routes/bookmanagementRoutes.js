const express = require('express');
const RouterBookmanagement = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterBookmanagement.post('/add-user');
RouterBookmanagement.get('/getuser');
RouterBookmanagement.put('/update-user/:id');
RouterBookmanagement.delete('/delete-user/:id');

module.exports = RouterBookmanagement;