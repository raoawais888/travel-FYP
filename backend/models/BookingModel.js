const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  number: {
    type: Number,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  members: {
    type: Number,
    required: true,
  },
  packageId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Packages',
    required: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users',  
    required: true
  },
  invoiceNumber: {
    type: String,
    required: true,
  },
},{
    timestamps: true // This enables the timestamps option
});

const Booking = mongoose.model('Bookings', bookingSchema);

module.exports = Booking;
