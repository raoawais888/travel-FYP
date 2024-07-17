const mongoose = require("mongoose");
const validator = require('validator');

  const userSchema = mongoose.Schema({
    email:{
        type:String,
        required:true,
        trime:true,
       
    },

    password:{
        type:String,
        required:true,
        trime:true
    },

    role:{
        type:Number,
        required:true,
        trime:true
    },

  })

  const userModel = mongoose.model("Users",userSchema);

  module.exports = userModel;