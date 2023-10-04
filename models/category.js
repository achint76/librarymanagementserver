const sequelize = require('../db/config');
const {DataTypes} = require('sequelize');

const Category = sequelize.define('categorytable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    // user_id: {
    //    type: DataTypes.INTEGER,
    //    allowNull: false 
    // },
    // order_id: {
    //     type: DataTypes.UUID,
    //     allowNull: false,
    //     defaultValue: UUIDV4
    // },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // book_id: {
    //     type: DataTypes.INTEGER,
    //     allowNull: false
    // }
    // date: {
    //     type: DataTypes.DATE(6),
    //     defaultValue: DataTypes.NOW,
    //     allowNull: false
    // }
}, {
    timestamps:false,
    id: false 
})
module.exports = Category;