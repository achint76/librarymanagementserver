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
updateInventory : async function(book_id, quantity){
    console.log(book_id,"book_id is---0--");
    console.log(quantity, "<-----quantity");
    const [numupdatedrows] = await models.Inventory.update({
        //price: models.sequelize.literal(`price + ${price}`),
        quantity: models.sequelize.literal(`quantity+${quantity}`)
    }, {
        where: {
            book_id: book_id
        }
    });    
    console.log(numupdatedrows, "<----------numupdatedrows");
    return numupdatedrows;
    // return models.Inventory.findOne({
    //     where:{
    //         book_id: book_id
    //     },
    //     raw: true
    // })
},
//decreasequantity: async function()
// decreasequantity: async function(book_id){
//     //console.log(userdata);
//     const decreasequantity = await models.Inventory.update({
//         quantity: models.sequelize.literal(`quantity - 1`)
//     },
//     {
//         where: {
           
//                  book_id: book_id 
               
        
//         },

//     })
//     return decreasequantity;
// }
decreasequantity: async function (book_id, quantity ) {
    // Decrease quantity by 1
    const currentquantity = await models.Inventory.findOne({
        where: {
           book_id: book_id
        }
    });
    console.log(currentquantity,"current quantity is this");
    if(currentquantity.quantity >= quantity){
    const [numUpdatedRows] = await models.Inventory.update(
        {
            quantity: models.sequelize.literal(`quantity - ${quantity}`)
        },
        {
            where: {
                book_id: book_id
            }
        }
    );

    return numUpdatedRows;
    }else  {
        console.log('Not enough inventory available.');
        return 0;
    }
},

getInventoryQuantity: async function (book_id) {
    try {
        const inventory = await models.Inventory.findOne({
            where: {
                book_id: book_id

            }
        });

        if (inventory) {
            return inventory.quantity;
        } else {
            return 0; // Return 0 if the book_id is not found in the inventory
        }
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching inventory quantity.');
    }
}


}
