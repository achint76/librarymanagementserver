const models = require('../models');

module.exports = {
    createStock: async function({book_id, availablenumber}){
        return await models.Stock.create({
            //id: id,
            book_id: book_id,
            
            availablenumber: availablenumber
        });
},
getStock: async function(){
    return await models.Stock.findAll();
},
// delete: async function({id}){
//     //console.log(id);
//     return await models.Books.destroy({
//         where: {
//             id: id
//         }
//     });
// },
// 
updateStock: async function(){
    
}
}
