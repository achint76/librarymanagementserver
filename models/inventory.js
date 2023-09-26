const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const Inventory = sequelize.define('inventorytable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    
}, {
    timestamps:false,
    id: false 
})
module.exports = Inventory;