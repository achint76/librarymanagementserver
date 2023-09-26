const inventoryService = require('../service/inventoryService');
module.exports = {
    createInventory: async function(req,res){
        const data = req.body;
        const inventory = await inventoryService.createInventory({
            id: data.id,
            book_id: data.book_id,
            quantity: data.quantity
        });
        res.json({message:'Inventory Created', data: inventory});
    },
    getInventory: async function(req,res){
        const inventory = await inventoryService.getInventory();
        res.json({
            message: 'All Inventory',
            data: inventory
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