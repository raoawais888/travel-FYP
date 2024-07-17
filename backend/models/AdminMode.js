const mongoose = require("mongoose");
const validator = require('validator');

  const adminSchema = mongoose.Schema({
 

    email:{
        type:String,
        required:true,
        trime:true,
        unique:true,
        validate: {
            validator: validator.isEmail, // Using validator.isEmail function
            message: '{VALUE} is not a valid email',
            isAsync: false // Optional, defaults to false. You can set this to true for asynchronous validation
        }
    },
    
    password:{
        type:String,
        required:true,
        trime:true
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',  
        required: true
      },


  })

  const adminModel = mongoose.model("admins",adminSchema);

  module.exports = adminModel;