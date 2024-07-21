const sliderModel = require("../models/SliderModel")
class SliderController {

  // / Create
  static store =  async (req, res) => {
    try {
      const slider = new sliderModel({
               sliderImage: req.file.path
      });
      await slider.save();
      res.status(201).send( {slider , message:"slider add successfully created" , success:true });
    } catch (error) {
      res.status(400).send({ message: error , sucess:false });
    }
  };


  static getALL = async (req, res) => {
    try {
      const agencies = await sliderModel.find();
      res.json({ success: true, agencies });
    } catch (error) {
      console.error('Error fetching agencies:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch agencies' });
    }
  };


  static delete = async (req, res) => {
    const agencyId = req.params.id;
  
    try {
      const deletedAgency = await sliderModel.findByIdAndDelete(agencyId);
      if (!deletedAgency) {
        return res.status(404).json({ success: false, error: 'Slider not found' });
      }
      res.json({ success: true, message: 'Slider deleted successfully' });
    } catch (error) {
      console.error('Error deleting Slider:', error);
      res.status(500).json({ success: false, error: 'Failed to delete Slider' });
    }
  };

}

module.exports  = SliderController;