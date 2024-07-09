const express = require("express")
const router = express.Router();
const UserController = require("../controller/userController.js");

router.post("/register",UserController.register)


module.exports = router;