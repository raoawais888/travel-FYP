const packageModel = require ("../models/packageModel");
const AgencyModel = require("../models/agencyModel")
const userModel = require("../models/userModel")
class PackageController {

  static addPackage = async (req, res) => {
    try {
      const { location, price, startDate, endDate, description, user } = req.body;
  
      // Log incoming data for debugging
      console.log('Request body:', req.body);
  
      // Handle JSON parsing
      let userGet;
      if (typeof user === 'string') {
        try {
          userGet = JSON.parse(user);
        } catch (err) {
          console.error('Invalid JSON string:', err);
          return res.status(400).json({ success: false, message: 'Invalid user JSON' });
        }
      } else {
        userGet = user; // Assuming 'user' is already an object
      }
  
      // Fetch agency
      const agency = await AgencyModel.findOne({ userId: userGet._id });
      if (!agency) {
        console.error('Agency not found');
        return res.status(404).json({ success: false, message: 'Agency not found' });
      }
  
      // Handle file uploads
      const images = req.files.map((file) => file.path);
  
      // Create package document
      const packagDoc = new packageModel({
        location,
        price,
        startDate,
        endDate,
        description,
        images,
        agencyId: agency._id,
      });
  
      // Save document
      const data = await packagDoc.save();
  
      // Respond with success
      res.json({
        success: true,
        message: 'Package added successfully',
        package: data,
      });
  
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while adding the package',
      });
    }
  };
  


     static getPackage =   async (req, res) => {
       
       try{
        const id = req.params.id ;
        const user = await userModel.findById(id);    
        const role = user.role;
       if(role === 2 ){
         const bookingsData = await packageModel.find({userId:id}).populate("agencyId")
           console.log("2" , bookingsData)
        
         res.json({
           success:true,
           message:"successfully fetched",
           bookings:bookingsData
       })

        }

        if(role === 1) {

           const bookingsData = await bookingModel.find().populate("agencyId")
           
           console.log("1::::::::::::::::::" , bookingsData );
           res.json({
             success:true,
             message:"successfully fetched",
             bookings:bookingsData
         })

        }

       
        } catch (err) {
          console.error(err.message);
          res.status(500).json({ success: false, error: 'Server Error' });
        }
      };

     

       static singlePackage =  async (req, res) => {
        const { id } = req.params;
      
        try {
          const singlePackage = await packageModel.findById(id).populate("agencyId");
      
          console.log("single::::::::" , singlePackage)
          if (!singlePackage) {
            return res.status(404).json({ success: false, message: 'Package not found' });
          }
      
          res.json({ success: true,package: singlePackage });
        } catch (error) {
          console.error(error);
          res.status(500).json({ success: false, message: 'Server error' });
        }
      };





     static update =   async (req, res) => {
        const packageId = req.params.id;
        const { location, price, startDate, endDate, description } = req.body;
        const images = req.files.map(file => ({
          path: file.path // store file path or URL as needed
        }));
      
        // Example: Update package in database
        try {
          // Your database update logic here
          // Example using a hypothetical database model Package
          const UpdatePackage = await packageModel.findByIdAndUpdate(packageId, {
            location,
            price,
            startDate,
            endDate,
            description,
            images: images.map(image => image.path) // assuming you store paths in database
          });
      
          res.json({ success: true, message: 'Package updated successfully' });
        } catch (error) {
          console.error('Error updating package:', error);
          res.status(500).json({ success: false, error: 'Failed to update package' });
        }
      };

      static remove = async (req, res) => {
        const { packageId } = req.params;
    
        try {
            const deletedPackage = await packageModel.findByIdAndDelete(packageId);
    
            if (!deletedPackage) {
                return res.status(404).json({success:false , message: 'Package not found' });
            }
    
            res.status(200).json({ message: 'Package removed successfully' ,success:true });
        } catch (error) {
            console.error('Error removing package:', error);
            res.status(500).json({ message: 'Server error' , success:false });
        }
    };

}


module.exports = PackageController;