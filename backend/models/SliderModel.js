const mongoose = require("mongoose")

// Agency schema and model setup (assuming MongoDB with Mongoose)
const sliderScheme = new mongoose.Schema({
    
    sliderImage: String, // store path or URL to logo
    
   

  });
  
  const slider = mongoose.model('sliders', sliderScheme);
module.exports = slider;  