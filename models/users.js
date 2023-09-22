
const {DataTypes} = require('sequelize');
const sequelize = require('../db/config');
const models = require('../models/index');
const User = sequelize.define('usertable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING(20),
       allowNull: false 
    },
    email: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    password: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    user_type: {
        type: DataTypes.ENUM('user', 'admin'), 
        allowNull: false,
        defaultValue: 'user', // Set the default value to 'user'
    },
},{
    timestamps:false,
    id: false 
})
module.exports = User;