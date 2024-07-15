const userModel = require("../models/userModel.js");
const bcrypt = require('bcryptjs');
const tokenGenrate = require("../helpers/jwtTokenGenrate.js")
class UserController {

    static register = async (req,res) =>{


        try {

            const {name , email , companyEmail , companyName , country , password} = req.body;
    
            const salt = await bcrypt.genSalt(10);
            const hashPassword =  await bcrypt.hash(password, salt);
            const user = new  userModel({
    
                name:name,
                email:email,
                companyEmail:companyEmail,
                companyName:companyName,
                country:country,
                password:hashPassword
            })
    
             await user.save();
                
             res.json({
                success:true,
                message:"User Successfuly Register",
                data : req.body
             })
    
            
        } catch (error) {
            
            res.json({
                success:false,
                message:error
             })
        }
       

    }




    static login = async (req,res)=>{


        try {

            const { email, password } = req.body;

              // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }
            

    // Generate JWT
    const payload = { id: user._id };

    const token = tokenGenrate(payload);
   
     console.log(token);


        } catch (error) {
           
            res.json({
                success:false,
                message:error
             })
        }


    }


}


module.exports = UserController;