

const {Op} = require('sequelize')
const models = require('../models/index');
module.exports = {
    loginfunc: async function({email, password}){
          return await models.Users.findAll({
            where: {
                [Op.and]:
            [{email: email},
            {password: password}]  
            },
            raw: true,
          })
    }
}