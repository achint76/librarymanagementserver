const models = require('../models/index');

module.exports = {
    userProfile: async function({name}){
        const user = await models.Users.findOne({
            where: {
                name: name
            },
            raw: true,
        });
        if(!user){
        console.log(`User with name "${name}" not found.`);
        return null;
        }
    }
}