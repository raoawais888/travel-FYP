const userModel = require("../models/userModel.js");
const VisitModel = require("../models/VisitorUserModel.js")
const bcrypt = require('bcryptjs');
const tokenGenrate = require("../helpers/jwtTokenGenrate.js")
class UserController {


    static getALL = async (req, res) => {
        try {
          const agencies = await userModel.find();
          res.json({ success: true, agencies });
        } catch (error) {
          console.error('Error users users:', error);
          res.status(500).json({ success: false, error: 'Failed to fetch users' });
        }
      };


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
            console.log(req.body)

              // Check if user exists
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.json({  success:false, message: 'Invalid username or password' });
    }

    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.json({ success:false, message: 'Invalid username or password' });
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



    static adminAdd = async (req,res)=>{

        try {
  
                const { email, password } = req.body;

                const emialCheck = await userModel.findOne({email});

                if(emialCheck){
                  res.json({
                      success:false,
                      message:`This email ${email} already exist`,
                      
                   })
      
                }
                const salt = await bcrypt.genSalt(10);
                const hashPassword =  await bcrypt.hash(password, salt);
         const userDoc = userModel({

             email, password :hashPassword , role:1
         })


                await userDoc.save();
                res.json({ success:true, message: 'Admin user added successfully' });
              
            
        }catch (error) {
            
            console.log(error)
        }

    }


    
  static delete = async (req, res) => {
    const Id = req.params.id;
  console.log(Id);
    try {
      const deletedAgency = await userModel.findByIdAndDelete(Id);
      if (!deletedAgency) {
        return res.json({ success: false, error: 'User not found' });
      }
      res.json({ success: true, message: 'User deleted successfully' });
    } catch (error) {
        console.log(error);
      console.error('Error deleting User:', error);
      res.status(500).json({ success: false, error: 'Failed to delete User' });
    }
  };

}


module.exports = UserController;