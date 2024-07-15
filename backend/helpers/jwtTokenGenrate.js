


const tokengenrate = (payoad)=>{

    const JWT_SECRET = 'your_jwt_secret_key';
    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: '1d' });

}


module.exports = tokengenrate;