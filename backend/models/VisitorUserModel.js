const mongoose = require("mongoose");
const validator = require('validator');

  const userSchema = mongoose.Schema({

    name:{
        type:String,
        required:true,
        trime:true
    },
    companyName:{
        type:String,
        required:true,
        trime:true
    },
    companyEmail:{
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
    country:{
        type:String,
        required:true,
        trime:true
    }
    ,
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users',  
        required: true
    }
      


  })

  const userModel = mongoose.model("visitusers",userSchema);

  module.exports = userModel;