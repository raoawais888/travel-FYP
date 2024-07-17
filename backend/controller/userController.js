const userModel = require("../models/userModel.js");
const VisitModel = require("../models/VisitorUserModel.js")
const bcrypt = require('bcryptjs');
const tokenGenrate = require("../helpers/jwtTokenGenrate.js")
class UserController {

    static register = async (req,res) =>{

        const {email , password , role} = req.body;
          const emialCheck = await userModel.findOne({email});

          if(emialCheck){
            res.json({
                success:false,
                message:`This email ${email} already exist`,
                
             })

          }

            const salt = await bcrypt.genSalt(10);
            const hashPassword =  await bcrypt.hash(password, salt);

        try {

            if(role === 3){
            const {name , companyEmail , companyName , country } = req.body;      
            
            const user = new  userModel({
               
                email:email,
                password:hashPassword,
                role:role


                
            })
    


            const  saveUser =  await user.save();
                
                  
            const visitUser = new VisitModel({
                name:name,
                companyEmail:companyEmail,
                companyName:companyName,
                country:country,
                
                userId : saveUser._id

            })

            await visitUser.save();
             res.json({
                success:true,
                message:"User Successfuly Register",
                data : req.body
             })
    
            }
            
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
      return res.status(400).json({  success:false, message: 'Invalid username or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ success:false, message: 'Invalid username or password' });
    }
            

    // Generate JWT
    const payload = { id: user._id };
    const token = tokenGenrate(payload);
     res.json({
        message:"Login successfully",
        token,
        user,
        success:true
     })


        } catch (error) {
           
            console.log(error)
            res.json({
                success:false,
                message:error
             })
        }


    }


}


module.exports = UserController;