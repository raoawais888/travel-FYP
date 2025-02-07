const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const packageSchema = new Schema({
  location: {
    type: String,
    required: true
   },
   price: {
    type: Number,
    required: true
   },
   startDate: {
    type: Date,
    required: true
   },
   endDate: {
    type: Date,
    required: true
   },
  description: {
    type: String,
    required: true
  },
  images: [{
    type: String,
    required: true
  }],
    agencyId: {
     type: Schema.Types.ObjectId,
     ref: 'Agency',  
     required: true
   },
   userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',  
    required: true
  },
});

const Package = mongoose.model('Packages', packageSchema);

module.exports = Package;
