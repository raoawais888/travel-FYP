const express = require("express")
const router = express.Router();
const UserController = require("../controller/userController.js");
const BookingController = require("../controller/BookingController.js")

router.post("/register",UserController.register)
router.post("/login",UserController.login)
router.post('/book-now', BookingController.store)
router.post('/contact', BookingController.contact)


module.exports = router;