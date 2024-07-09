const mongoose = require("mongoose");
const   DB_URL  = process.env.DB_URL;
const connectDB = async () => {
    try {

        const OPTION = {
            dbName : "travel"
        }
        await mongoose.connect(DB_URL,OPTION );
        console.log('MongoDB Connected');
    } catch (error) {
        console.error('MongoDB Connection Error:', error.message);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;