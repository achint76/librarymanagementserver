const loginService = require('../service/loginService');
const jwtService = require('../service/jwtService');

module.exports = {
    loginfunc: async function(req,res){
        const data = req.body;
        const user = await loginService.loginfunc({
            id: data.id,
            name: data.name,
            email: data.email,
            password: data.password,
            user_type: data.user_type
        });
        const dbUser = user[0];
        console.log(dbUser);
        if(data.email == dbUser.email && data.name == dbUser.name && data.password == dbUser.password && data.user_type == dbUser.user_type)
        {
            const jwt = jwtService.createToken({
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email
            })
            res.json({
                message : "Logged In",
                Profile : user,
                JWTtoken: jwt
            })
        }
    }
}