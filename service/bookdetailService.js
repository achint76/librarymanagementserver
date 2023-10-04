const models = require('../models');
const inventoryService = require('../service/inventoryService');
module.exports = {
    createBookdetails: async function ({ user_id, book_id, category_id, issued_date, submission_date, quantity, approved }) {
        return await models.Bookdetails.create({
            //id: id,
            book_id: book_id,
            user_id: user_id,
            category_id: category_id,
            issued_date: issued_date,
            submission_date: submission_date,
            quantity: quantity,
            approved: approved
        });
    },
    getBookdetails: async function () {
        return await models.Bookdetails.findAll();
    },
    deleteBookdetails: async function ({ id }) {
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
            const bookdetail = await models.Bookdetails.findOne({
                where: {
                    id: bookdetailId
                }
            });
            if (!bookdetail) {
                return { success: false, message: 'Book detail not found.' };
            }

            const inventoryQuantity = await inventoryService.getInventoryQuantity(bookdetail.book_id);
            if (bookdetail.quantity > inventoryQuantity) {
                return { success: false, message: 'Book quantity exceeds inventory quantity.' };
            }
            const [numUpdatedRows] = await models.Bookdetails.update(updateoptions,{
                where : {
                    id : bookdetailId
                }
            })
            if(numUpdatedRows > 0){
                // console.log("")
                const bookDetail = await models.Bookdetails.findOne({
                    where : {
                        id : bookdetailId
                    }
                })
                console.log(bookDetail,"this is bookdetail");
                return {success: true, message: 'Book issue approved.', data:bookDetail};
            } else {
                return {success: false, message: 'Book issue already approved.', data: "book already updated"};
            }
        } catch (error) {
            console.error(error);
            return { success: false, message: 'Error approving book issue.' };
        }
    },

    //function for book returned by the user
    userbookreturn: async function({bookdetailId, userreturndate,updateoptions}){
        try{
            const [numupdatedrows] = await models.Bookdetails.update(updateoptions, {
                where: {
                    id: bookdetailId
                }
            })
            if(numupdatedrows > 0){
                // console.log("")
                const returnDetail = await models.Bookdetails.findOne({
                    where : {
                        id : bookdetailId
                    }
                })
                console.log(returnDetail,"this is returndetail");
                return {success: true, message: 'Book Return approved.', data:returnDetail};
            }  else{
                return {success: false, message: 'Book return already approved.', data: "book already updated"};
            }
            
        }  catch (error) {
            console.error(error);
            return { success: false, message: 'Error approving book return.' };
        }
    },
    // bookreturndate: async function({ bookdetailId, userreturndate }) {
    //     return await models.Bookdetails.update(
    //         {
    //             userreturndate: userreturndate
    //         },
    //         {
    //             where: {
    //                 id: bookdetailId
    //             }
    //         }
    //     );
    // }
    // Set userreturndate to null
bookreturndate: async function ({ bookdetailId }) {
    try {
        const [numUpdatedRows] = await models.Bookdetails.update(
            {
                userreturndate: null // Set userreturndate to null
            },
            {
                where: {
                    id: bookdetailId
                }
            }
        );

        if (numUpdatedRows > 0) {
            return { success: true, message: 'Return date cleared.' };
        } else {
            return { success: false, message: 'Book detail not found.' };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error clearing return date.' };
    }
},

// Update userreturndate with a specific return date
updateReturnDate: async function ({ bookdetailId, userreturndate }) {
    // console.log(userreturndate, "<----------------userreturndate");
    try {
        const [numUpdatedRows] = await models.Bookdetails.update(
            {
                userreturndate: userreturndate // Update with the desired return date
            },
            {
                where: {
                    id: bookdetailId
                }
            }
        );
        // console.log(numUpdatedRows,"NUMUPDATEDROWS")
        if (numUpdatedRows > 0) {
            const bookdetail = await models.Bookdetails.findOne({
                where: {
                    id: bookdetailId
                }
            })
            return { success: true, message: 'Return date updated.', data: bookdetail };
        } else {
            return { success: false, message: 'Book detail not found.', data: null };
        }
    } catch (error) {
        console.error(error);
        return { success: false, message: 'Error updating return date.' };
    }
},


getBookDetailsById: async function (bookdetailId) {
    try {
        const bookDetail = await models.Bookdetails.findOne({
            where: {
                id: bookdetailId
            }
        });
        return bookDetail;
    } catch (error) {
        console.error(error);
        return null; // Return null or handle the error as needed
    }
}

    


}
