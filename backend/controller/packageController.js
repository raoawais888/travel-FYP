const packageModel = require ("../models/packageModel");
const AgencyModel = require("../models/agencyModel")
class PackageController {

    static addPackage  = async (req,res,file)=>{
                  
      
      try {
        

        const { location, price, startDate, endDate, description,user } = req.body;
             
         const userGet = JSON.parse(user);
         const agency =  await AgencyModel.findOne({userId:userGet._id});
       
         

        const images = req.files.map((file) => file.path);
            
        const packagDoc = packageModel({ location, price, startDate, endDate, description , images , agencyId : agency._id  } );

        const data = await packagDoc.save()
          

        res.json({
         success:true,
          message: 'Package added successfully',
          package: data,
        });


      } catch (error) {
        
        console.log(error)

        res.json({
          success:false,
           message: error
         
         });
      }

        
    }




     static getPackage =   async (req, res) => {
        const { page = 1, limit = 10, search = '' } = req.query;
        const query = {};
        
        // Example: If you want to filter by location
        if (search) {
          query.location = { $regex: search, $options: 'i' };
        }
      
        try {
          const packages = await packageModel.find(query)
          .skip((page - 1) * limit)
          .limit(limit)
          .populate("agencyId")
          .exec();
          // console.log(packages);
      
          const count = await packageModel.countDocuments(query);
          res.json({ success: true, packages, totalPages: Math.ceil(count / limit) });
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