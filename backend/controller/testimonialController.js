const testimonialModel = require("../models/TestimonialModel")
class TestimonialController {

  // / Create
  static store =  async (req, res) => {
    try {
        const newTestimonial = new testimonialModel(req.body);
        await newTestimonial.save();
        res.json({
            newTestimonial,
            success:true,
            message:"Testimonial Successfully Added"
        });
      } catch (error) {
        res.json({ success:false , error: 'Failed to add testimonial' });
      }
  };


  static getALL = async (req, res) => {
    try {
      const agencies = await testimonialModel.find();
      res.json({ success: true, agencies });
    } catch (error) {
      console.error('Error fetching testimonal:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch testimonal' });
    }
  };


  static delete = async (req, res) => {
    const agencyId = req.params.id;
  
    try {
      const deletedAgency = await testimonialModel.findByIdAndDelete(agencyId);
      if (!deletedAgency) {
        return res.status(404).json({ success: false, error: 'testimonal not found' });
      }
      res.json({ success: true, message: 'testimonal deleted successfully' });
    } catch (error) {
      console.error('Error deleting testimonal:', error);
      res.status(500).json({ success: false, error: 'Failed to delete testimonal' });
    }
  };

}

module.exports  = TestimonialController;