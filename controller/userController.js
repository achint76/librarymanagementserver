const userService = require('../service/userService');
const jwtService = require('../service/jwtService');
const sessionService = require('../service/sessionService');
const models = require('../models');
const {Op} = require('sequelize')
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
    ,
    updateSessionlogout: async function (req,res){
        try{
            const jwt = req.headers["authorization"];
            const authData = jwtService.verifyToken(jwt);
            const sessions_id = authData.id;
            const date = new Date();
            const session = await sessionService.findSession({id: sessions_id});
            console.log(sessions_id,"SesssssionsId^^^^^^^^");
            console.log(session,"Session Is this!!!!!!!!");
            const sessions = await models.Session.findAll({
                where: {
                    [Op.and]: [
                        { logout: null }, // Check if logout is null
                        { expiry: { [Op.gt]: date } } // Check if expiry is greater than the current date
                    ]
                }
            });
            console.log(sessions,"SESSIONS AFTER CHECKING LOGOUT AND EXPIRY");
            if(sessions){
            const logOut = await sessionService.updateSessionlogout({
                date: date,
                id: sessions_id
            })

            if (logOut.numUpdatedRows > 0) {
                res.json({
                    message: `${authData.name} Logged out`
                })
            }
            else {
                res.json({
                    message: `Log in to log out`
                })
            }
        }
        else{
             console.log("sessions not found!!!");
        } } catch (error) {
            console.log(error,"<----error");
            res.status(500).json({
                message: `error coming !!!!!`,
                err: error,
            });
        }
    
    },

    // sessionExpire: async function(req,res){
    //     try{
    //        const jwt = req.headers["authorization"];
    //        const authData = jwtService.verifyToken(jwt);
    //        const session_id = authData.id;
    //        const date = new Date();


    //     }catch(error){
        
    //     }

    // }
}