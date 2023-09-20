const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');

const BookDetails = sequelize.define('bookdetailstable', {
    id: {
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {
       type: DataTypes.INTEGER,
       allowNull: false 
    },
    book_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        
    },
    category_id: {
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
    }
}, {
    timestamps:false,
    id: false 
})
module.exports = BookDetails;