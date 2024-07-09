const userModel = require("../models/userModel.js");

class UserController {

    static register = async (req,res) =>{


        try {

            const {name , email , companyEmail , companyName , country , password} = req.body;
           
            const user = new  userModel({
    
                name:name,
                email:email,
                companyEmail:companyEmail,
                companyName:companyName,
                country:country,
                password:password,
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



}


module.exports = UserController;