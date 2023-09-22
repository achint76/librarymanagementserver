const models = require('../models');

module.exports = {
    createUserdetails: async function({user_id, book_id, category_id, submission_date}){
        return await models.Userdetails.create({
            //id: id,
            book_id: book_id,
            user_id: user_id,
            category_id: category_id,
            submission_date: submission_date
        });
},
getUserdetails: async function(){
    return await models.Userdetails.findAll();
},
deleteUserdetails: async function({id}){
    //console.log(id);
    return await models.Userdetails.destroy({
        where: {
            id: id 
        }
    });
},
updateUserdetails: async function({updateoptions, whereoptions}){
    return await models.Userdetails.update(updateoptions,{
    where: whereoptions
    })
}
// 
}
