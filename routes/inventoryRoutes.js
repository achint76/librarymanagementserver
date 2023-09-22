const express = require('express');
const inventoryController = require('../controller/inventoryController');
const RouterInventory = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterInventory.post('/add-inventory', inventoryController.createInventory);
RouterInventory.get('/getinventory', inventoryController.getInventory);
//RouterInventory.put('/update-inventory/:id');
//RouterInventory.delete('/delete-inventory/:id');

module.exports = RouterInventory;