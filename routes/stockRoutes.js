const express = require('express');
const RouterStock = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterStock.post('/add-stock');
RouterStock.get('/getstock');
RouterStock.put('/update-stock/:id');
RouterStock.delete('/delete-stock/:id');

module.exports = RouterStock;