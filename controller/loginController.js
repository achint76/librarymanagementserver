const loginService = require('../service/loginService');
const jwtService = require('../service/jwtService');
const sessionService = require('../service/sessionService')
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

        if (dbUser == undefined) {
            res.json({
                message: `!!!!You are not Signed Up!!!!`
            })
        } 

        else if(data.email == dbUser.email  && data.password == dbUser.password )
        {
            const sessions = await sessionService.createSession({
                user_id: dbUser.id
              })
            const jwt = jwtService.createToken({
                id: sessions.id,
                user_id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                user_type: dbUser.user_type
            });

            const authData = jwtService.verifyToken(jwt);
            
            // console.log(authData, "<---- Auth data");
           console.log(authData);
            const expDate = new Date(authData.exp * 1000);
            const iatDate = new Date(authData.iat * 1000);

            const sessionUpdate = await sessionService.updateSessionlogin({
                expiry: expDate,
                login: iatDate,
                id: authData.id
              })
            // res.json({
            //     message : "Logged In",
            //     Profile : user,
            //     JWTtoken: jwt
            // })

            const userdata = user[0];
            delete userdata.password;
            delete userdata.user_id;
            res.json({
                message: "Logged In",
                Profile: userdata,
                JWTtoken: jwt
            })
        }
        else {
            res.json({
                message: "Invalid Combination"
            })
        }
    }
        
    }