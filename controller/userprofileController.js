const userprofileService = require('../service/userprofileService')

 async function userProfile(req,res){
    const data = req.userdata;
    // console.log(data.userName);
    const userprofile = await userprofileService.userProfile({
        name : data.name
    })
    
    res.json({
        profile : userprofile
    })
 }
 module.exports = { 
    userProfile,

 }