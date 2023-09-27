const inventoryService = require('../service/inventoryService');
module.exports = {
    createInventory: async function(req,res){
       // console.log(req.userdata.user_type);
        if(req.userdata.user_type == "admin"){
        const data = req.body;
        const inventory = await inventoryService.createInventory({
            id: data.id,
            book_id: data.book_id,
            quantity: data.quantity
        });
        res.json({message:'Inventory Created', data: inventory});
    }
    else   console.log("user cannot perform any operations in inventory")
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
    updateInventory: async function(req,res){
        if(req.userdata.user_type == admin){
        const data = req.body;
        const inventory = await inventoryService.updateInventory({
            id: data.id,
            book_id: data.book_id,
            quantity: data.quantity
        })
        console.log(data.quantity);
        res.json({
            message: `${data.quantity} copies added to inventory`,
            AddedProduct: inventory
        })
    }
    else
    console.log("user cannot do any operations in inventory");
    },
   
    }
