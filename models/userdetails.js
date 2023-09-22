const sequelize = require('../db/config');
const {DataTypes} = require('sequelize');

const moment = require('moment');
const UserDetails = sequelize.define('userdetailstable', {
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
        allowNull: false
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    issued_date: {
        type: DataTypes.DATEONLY,
        defaultValue:  moment().format('YYYY-MM-DD'),
        allowNull: false
    },
    submission_date: {
        type: DataTypes.DATEONLY,
        
        allowNull: false
    }

},{
    timestamps:false,
    id: false ,
    
    
})
module.exports = UserDetails;