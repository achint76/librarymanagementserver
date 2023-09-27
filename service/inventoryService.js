const models = require('../models');

module.exports = {
    createInventory: async function({book_id, quantity}){
        return await models.Inventory.create({
            //id: id,
            book_id: book_id,
            quantity: quantity
        });
},
getInventory: async function(){
    return await models.Inventory.findAll();
},
// deleteInventory: async function({id}){
//     //console.log(id);
//     return await models.Books.destroy({
//         where: {
//             id: id
//         }
//     });
// },
// 
updateInventory : async function({book_id, quantity}){
    await models.Inventory.update({
        //price: models.sequelize.literal(`price + ${price}`),
        quantity: models.sequelize.literal(`quantity+${quantity}`)
    }, {
        where: {
            book_id:book_id
        }
    })

    return models.Inventory.findOne({
        where:{
            book_id: book_id
        },
        raw: true
    })
},
//decreasequantity: async function()

}
