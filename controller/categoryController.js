const categoryService = require('../service/categoryService');
module.exports = {
    createCategory: async function(req,res){
        if(req.userdata.user_type == "admin"){
        const data = req.body;
        const category = await categoryService.createCategory({
            id: data.id,
            category_name: data.category_name,
           //bookdetails_id: data.bookdetails_id
        });
        res.json({message:'Category Created', data: category});
    }
    else   console.log("user cannot perform any operations in category")
    },
    getCategory: async function(req,res){
        const category = await categoryService.getCategory();
        res.json({
            message: 'All Category',
            data: category
        });
    },
    deleteCategory: async function(req,res){
        const uid = req.params.id;
        const category = await categoryService.deleteCategory(uid);
        if(category.success)
        res.json({message: 'User deleted', data: category})
        else {
            res.status(404).json({ message: category.message });
        }
    },
    updateCategory: async function(req,res){
        if(req.userdata.user_type == 'admin'){
        const uid = req.params.id;
        const updatedData = req.body;
        console.log(uid,"UID::::");
        const category = await categoryService.updateCategory(uid, updatedData);
        if(category.success)
        res.json({ message: category.message });
    else
    res.status(404).json({ message: category.message });
    }
}

    
}