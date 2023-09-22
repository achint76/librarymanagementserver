const models = require('../models');

module.exports = {
    createBookdetails: async function({user_id, book_id, category_id, issued_date, submission_date}){
        return await models.Bookdetails.create({
            //id: id,
            book_id: book_id,
            user_id: user_id,
            category_id: category_id,
            issued_date: issued_date,
            submission_date: submission_date
        });
},
getBookdetails: async function(){
    return await models.Bookdetails.findAll();
},
deleteUserdetails: async function({id}){
    //console.log(id);
    return await models.Bookdetails.destroy({
        where: {
            id: id
        }
    });
},
// updateUserdetails: async function(updateoptions, whereoptions){
//     return await models.Userdetails.update(updateoptions,{
//     where: whereoptions
//     })
// }
// 
}
