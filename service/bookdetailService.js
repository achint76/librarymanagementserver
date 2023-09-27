const models = require('../models');

module.exports = {
    createBookdetails: async function ({ user_id, book_id, category_id, issued_date, submission_date, approved }) {
        return await models.Bookdetails.create({
            //id: id,
            book_id: book_id,
            user_id: user_id,
            category_id: category_id,
            issued_date: issued_date,
            submission_date: submission_date,
            approved: approved
        });
    },
    getBookdetails: async function () {
        return await models.Bookdetails.findAll();
    },
    deleteUserdetails: async function ({ id }) {
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
    // userbookissue: async function({user_id, book_id}){
    //      return await models.Bookdetails.findAll({
    //         where: {
    //             [Op.and]:
    //             [{user_id: user_id},
    //             {book_id: book_id}]
    //         },
    //         raw: true,
    //      })
    // },
    userbookissue: async function ({ bookdetailId, updateoptions }) {
        try {
            const [numUpdatedRows] = await models.Bookdetails.update(updateoptions,{
                where : {
                    id : bookdetailId
                }
            })
            if(numUpdatedRows > 0){
                const bookDetail = await models.Bookdetails.findOne({
                    where : {
                        id : bookdetailId
                    }
                })
                return {success: true, message: 'Book issue approved.', data:bookDetail};
            } else {
                return {success: false, message: 'Book issue already approved.', data: "book already updated"};
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Error approving book issue.' };
        }
    }


}
