const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const BookManagement = sequelize.define('bookmanagementtable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    inventory_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    issued_date: {
        type: DataTypes.DATE(6),
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    submission_date: {
        type: DataTypes.DATE(6),
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    submitted_on: {
        type: DataTypes.DATE(6),
        defaultValue: DataTypes.NOW,
        allowNull: false
    },
    book_serialnumber: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    timestamps: false,
    id: false
})

module.exports = BookManagement;
