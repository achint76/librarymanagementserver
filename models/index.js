const sequelize = require('../db/config');
const Users = require('./users');
const Books = require('./books')
const Userdetails = require('./userdetails');
const Bookdetails = require('./bookdetails');
const Inventory = require('./inventory');
const Stock = require('./stock');
const Category = require('./category');
const Bookmanagement = require('./bookmanagement');
const Session = require('./sessions');

Category.hasMany(Books, {
    foreignKey: 'category_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE", as: "category"
});
Books.belongsTo(Category,{
    foreignKey: 'category_id', as: "category"
});

Books.hasMany(Inventory, {
    foreignKey: 'book_id',
    onDelete: "CASCADE",
    onUpdate: "CASCADE"
});
Inventory.belongsTo(Books, {
    foreignKey: 'book_id'
})

sequelize.sync({ alter: true });

module.exports = {
    Category,
    Stock,
    Users,
    Userdetails,
    Books,
    Bookdetails,
    sequelize,
    Inventory,
    Bookmanagement,
    Session
};