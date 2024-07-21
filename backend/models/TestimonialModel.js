const mongoose = require("mongoose")
// Testimonial Schema
const testimonialSchema = new mongoose.Schema({
    name: { type: String, required: true },
    testimonial: { type: String, required: true },
  },{
    timestamps:true
  } 
);

  const testimonial = mongoose.model('testimonials', testimonialSchema);
  module.exports = testimonial;  