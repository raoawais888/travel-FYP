
const Agency = require("../models/agencyModel");
const userModel = require("../models/userModel")
const bcrypt = require('bcryptjs');

class AgencyController {


    static store =  async (req, res) => {

      const {agencyEmail , agencyPassword , role} = req.body;
      console.log(req.body);
          const emialCheck = await userModel.findOne({email:agencyEmail});

          if(emialCheck){
            res.json({
                success:false,
                message:`This email ${agencyEmail} already exist`,
                
             })

          }

            const salt = await bcrypt.genSalt(10);
            const hashPassword =  await bcrypt.hash(agencyPassword, salt);


            const user = new  userModel({               
              email: agencyEmail,
              password:hashPassword,
              role:parseInt(role)
              
          })

          const  saveUser =  await user.save();
            

        const { agencyName,  agencyAddress, agencyNumber,   } = req.body;
        const agencyLogo = req.file; // multer will parse the uploaded file
      
        try {
          const newAgency = new Agency({
            agencyName,
            agencyAddress,
            agencyNumber,
            agencyLogo: agencyLogo.path ,// save the file path or URL as needed
            userId:saveUser._id
          });
      
          const savedAgency = await newAgency.save();
          res.status(201).json({ success: true, message: 'Agency added successfully', agency: savedAgency });
        } catch (error) {
          console.error('Error adding agency:', error);
          res.status(500).json({ success: false, error: 'Failed to add agency' });
        }
      };
      
      // Read all agencies
      static getALL = async (req, res) => {
        try {
          const agencies = await Agency.find();
          res.json({ success: true, agencies });
        } catch (error) {
          console.error('Error fetching agencies:', error);
          res.status(500).json({ success: false, error: 'Failed to fetch agencies' });
        }
      };
      
      // Read agency by ID
       static singleAgency = async (req, res) => {
        const agencyId = req.params.id;
      
        try {
          const agency = await Agency.findById(agencyId);
          if (!agency) {
            return res.status(404).json({ success: false, error: 'Agency not found' });
          }
          res.json({ success: true, agency });
        } catch (error) {
          console.error('Error fetching agency:', error);
          res.status(500).json({ success: false, error: 'Failed to fetch agency' });
        }
      };



     static update = async (req, res) => {
        const agencyId = req.params.id;
        const { agencyName, agencyEmail, agencyAddress, agencyNumber, agencyPassword } = req.body;
        const agencyLogo = req.file; // multer will parse the uploaded file
      
        try {
          let updatedAgency = await Agency.findById(agencyId);
      
          if (!updatedAgency) {
            return res.status(404).json({ success: false, error: 'Agency not found' });
          }
      
          updatedAgency.agencyName = agencyName;
          updatedAgency.agencyEmail = agencyEmail;
          updatedAgency.agencyAddress = agencyAddress;
          updatedAgency.agencyNumber = agencyNumber;
          updatedAgency.agencyPassword = agencyPassword;
          
          if (agencyLogo) {
            updatedAgency.agencyLogo = agencyLogo.path; // Update logo only if a new one is uploaded
          }
      
          const savedAgency = await updatedAgency.save();
          res.json({ success: true, message: 'Agency updated successfully', agency: savedAgency });
        } catch (error) {
          console.error('Error updating agency:', error);
          res.status(500).json({ success: false, error: 'Failed to update agency' });
        }
      };


      static delete = async (req, res) => {
        const agencyId = req.params.id;
      
        try {
          const deletedAgency = await Agency.findByIdAndDelete(agencyId);
          if (!deletedAgency) {
            return res.status(404).json({ success: false, error: 'Agency not found' });
          }
          res.json({ success: true, message: 'Agency deleted successfully' });
        } catch (error) {
          console.error('Error deleting agency:', error);
          res.status(500).json({ success: false, error: 'Failed to delete agency' });
        }
      };


}

module.exports = AgencyController;