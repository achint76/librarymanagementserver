const express = require('express');
const inventoryController = require('../controller/inventoryController');
const loginMiddleware = require('../middleware/loginMiddleware');
const RouterInventory = express.Router();
// const userController = require('../controller/userController');
// const userMiddleware = require('../middleware/userMiddleware');

RouterInventory.post('/add-inventory',loginMiddleware.userProfile, inventoryController.createInventory);
RouterInventory.get('/getinventory',loginMiddleware.userProfile, inventoryController.getInventory);
RouterInventory.put('/update-inventory',loginMiddleware.userProfile, inventoryController.updateInventory);
//RouterInventory.put('/update-inventory/:id');
//RouterInventory.delete('/delete-inventory/:id');

module.exports = RouterInventory;