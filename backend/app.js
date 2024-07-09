const env = require("dotenv");
env.config();
const express = require("express");
const cors = require("cors");
const app = express();
const connection = require("./db/connection.js");
const router = require("./routes/route.js")
const port = 8000;
connection();


app.use(express.json());
app.use(cors());

app.use("/", router);

app.listen(port , ()=>{
    console.log(`http://localhost:${port}`);
})