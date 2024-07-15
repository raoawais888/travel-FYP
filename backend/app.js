const env = require("dotenv");
env.config();
const express = require("express");
const cors = require("cors");
const app = express();
const path = require('path');
const connection = require("./db/connection.js");
const router = require("./routes/route.js")
const adminRouter = require("./routes/adminRoute.js")


const port = 8000;
connection();

// Serve static files from the 'uploads' folder
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());


app.use("/", router);
app.use("/admin", adminRouter);

app.listen(port , ()=>{
    console.log(`http://localhost:${port}`);
})