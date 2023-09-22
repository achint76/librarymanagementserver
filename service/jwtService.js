const { sign, verify } = require("jsonwebtoken");
const createToken = function ({name, email}){
    const accessToken = sign({
        name, email
    }, "createJwtToken")
    return accessToken;
};

module.exports = {
    createToken
}