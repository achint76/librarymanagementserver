const express = require('express');
const RouterInventory = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterInventory.post('/add-inventory');
RouterInventory.get('/getinventory');
RouterInventory.put('/update-inventory/:id');
RouterInventory.delete('/delete-inventory/:id');

module.exports = RouterInventory;