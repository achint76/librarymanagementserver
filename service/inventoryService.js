const models = require('../models');

module.exports = {
    createInventory: async function({book_id, book_serialnumber}){
        return await models.Inventory.create({
            //id: id,
            book_id: book_id,
            book_serialnumber: book_serialnumber
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
}
