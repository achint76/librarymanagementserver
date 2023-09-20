const models = require('../models');

module.exports = {
    createBook: async function({book_id, user_id, category_id}){
        return await models.Books.create({
            //id: id,
            book_id: book_id,
            user_id: user_id,
            category_id: category_id
        });
},
getBook: async function(){
    return await models.Books.findAll();
},
deleteBook: async function({id}){
    //console.log(id);
    return await models.Books.destroy({
        where: {
            id: id
        }
    });
},
// 
}
