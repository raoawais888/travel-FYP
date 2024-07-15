const packageModel = require ("../models/packageModel");
class PackageController {

    static addPackage  = async (req,res,file)=>{

        const { location, price, startDate, endDate, description } = req.body;
        const images = req.files.map((file) => file.path);
            
        const packagDoc = packageModel({ location, price, startDate, endDate, description , images } );

        const data = await packagDoc.save()
          

        res.json({
         success:true,
          message: 'Package added successfully',
          package: data,
        });


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
            .exec();
      
          const count = await packageModel.countDocuments(query);
          res.json({ success: true, packages, totalPages: Math.ceil(count / limit) });
        } catch (err) {
          console.error(err.message);
          res.status(500).json({ success: false, error: 'Server Error' });
        }
      };

     

}


module.exports = PackageController;