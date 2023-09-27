const models = require('../models');

module.exports = {
    createUser: async function({name, email, password, user_type}){
        return await models.Users.create({
            //id: id,
            name: name,
            email: email,
            password: password,
            user_type: user_type
        });
},
getUser: async function(){
    return await models.Users.findAll();
},
deleteUser: async function({id}){
    //console.log(id);
    return await models.Users.destroy({
        where: {
            id: id
        }
    });
},
validateEmail: async function ({email}){
    if(email == undefined || email == null){
        throw new Error('Email is undefined or null');
    }
    const existingUser = await models.Users.findOne({
        where: {
            email: email
        },
        //raw: true
    });

    if (existingUser) {
        throw new Error('Email already exists');
    }
},


}
