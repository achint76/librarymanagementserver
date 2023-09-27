const sequelize = require('../db/config');

const {DataTypes} = require('sequelize');
const moment = require('moment');
 
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
        type: DataTypes.DATEONLY(6),
        //defaultValue:  moment().format('YYYY-MM-DD'),
        allowNull: true
    },
    submission_date: {
        type: DataTypes.DATEONLY(6),
        
        allowNull: true
    },
    approved: {
        type: DataTypes.BOOLEAN,
        //defaultValue: false
    }
}, {
    timestamps:false,
    id: false 
})
module.exports = BookDetails;