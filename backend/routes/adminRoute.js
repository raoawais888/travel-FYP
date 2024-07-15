const express = require("express")
const router = express.Router();
const UserController = require("../controller/packageController");
const upload = require("../config/imagesmulter");

router.post("/add-package",  upload.array('images') ,UserController.addPackage)
router.get("/packages", UserController.getPackage)


module.exports = router;