const categoryService = require('../service/categoryService');
module.exports = {
    createCategory: async function(req,res){
        const data = req.body;
        const category = await categoryService.Category({
            id: data.id,
            category_name: data.category_name,
            bookdetails_id: data.bookdetails_id
        });
        res.json({message:'Category Created', data: category});
    },
    getCategory: async function(req,res){
        const category = await categoryService.getCategory();
        res.json({
            message: 'All Category',
            data: category
        });
    },
    // deleteInventory: async function(req,res){
    //     const uid = req.params.id;
    //     const inventoryDelete = await inventoryService.({
    //         id: uid
    //     });
    //     res.json({message: 'User deleted', data: userDelete})
    // }

    
}