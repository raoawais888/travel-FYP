const mongoose = require("mongoose")

// Agency schema and model setup (assuming MongoDB with Mongoose)
const agencySchema = new mongoose.Schema({
    agencyName: String,
    agencyLogo: String, // store path or URL to logo
    agencyAddress: String,
    agencyNumber: String,
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Users',  
      required: true
    },
   

  });
  
  const Agency = mongoose.model('Agency', agencySchema);
module.exports = Agency;  