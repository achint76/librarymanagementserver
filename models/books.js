const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');
const Book = sequelize.define('bookstable',{
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false 
     },
     user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
     },
     category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
     }
 
},
{
    timestamps: false,
    id: false
}

)

module.exports = Book;