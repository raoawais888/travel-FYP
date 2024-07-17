
const jwt = require("jsonwebtoken")

const tokengenrate = (payload)=>{

    const JWT_SECRET = 'your_jwt_secret_key';
    const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' });
      return token;

}


module.exports = tokengenrate;