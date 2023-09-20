const userService = require('../service/userService');
module.exports = {
    createUser: async function(req,res){
        const data = req.body;
        const user = await userService.createUser({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            user_type: data.user_type
        });
        res.json({message:'User Created', data: user});
    },
    getUser: async function(req,res){
        const users = await userService.getUser();
        res.json({
            message: 'All Users',
            data: users
        });
    },
    deleteUser: async function(req,res){
        const uid = req.params.id;
        const userDelete = await userService.deleteUser({
            id: uid
        });
        res.json({message: 'User deleted', data: userDelete})
    }
}