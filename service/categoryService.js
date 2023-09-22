const models = require('../models');

module.exports = {
    createCategory: async function({category_name, bookdetails_id}){
        return await models.Books.create({
            //id: id,
        
            category_name: category_name,
            bookdetails_id: bookdetails_id
        });
},
getCategory: async function(){
    return await models.Category.findAll();
},
// deleteCa: async function({id}){
//     //console.log(id);
//     return await models.Books.destroy({
//         where: {
//             id: id
//         }
//     });
// },
// 
updateCategory: async function(updateoptions, whereoptions){
    return await models.Userdetails.update(updateoptions,{
    where: whereoptions
    })
}
}
