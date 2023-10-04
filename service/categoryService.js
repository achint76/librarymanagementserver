const models = require('../models');

module.exports = {
    createCategory: async function({category_name, bookdetails_id}){
        return await models.Category.create({
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
updateCategory: async function(categoryId, updateData){
    const [numUpdatedRows] = await models.Category.update(updateData, {
        where: {
            id: categoryId
        }
    });
    if (numUpdatedRows > 0) {
        return { success: true, message: 'Category updated successfully.' };
    } else {
        return { success: false, message: 'Category not found.' };
    }
}, 
deleteCategory: async function(categoryId){
    const numDeletedRows =  await models.Category.destroy({
        where: {
            id: categoryId
        }
    });
    if(numDeletedRows > 0){
        return { success: true, message: 'Category deleted successfully.' };
    }
    else{
        return { success: false, message: 'Category not found.' };
    }
}
}
