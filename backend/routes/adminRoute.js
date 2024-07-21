const express = require("express")
const router = express.Router();
const upload = require("../config/imagesmulter");
const PackageController = require("../controller/packageController");
const AgencyController = require ("../controller/agencyController");
const BlogController = require("../controller/blogController");
const BookingController = require("../controller/BookingController");
const UserController = require("../controller/userController");
const SliderController = require("../controller/SliderController")
const TestimonialController = require("../controller/testimonialController")

router.post("/add-package",  upload.array('images') ,PackageController.addPackage)
router.get("/packages/:id", PackageController.getPackage)
router.get("/packages/:id", PackageController.singlePackage)
router.put('/packages/:id', upload.array('images') , PackageController.update ) 
router.delete('/packages/:packageId', PackageController.remove) ;

router.post('/agencies', upload.single('agencyLogo') , AgencyController.store )
router.get('/agencies', AgencyController.getALL ) 
router.get('/agencies/:id',AgencyController.singleAgency ) 
router.put('/agencies/:id', upload.single('agencyLogo'), AgencyController.update)
// Delete agency by ID
router.delete('/agencies/:id',  AgencyController.delete)


router.post('/blogs', upload.single('featureImage'), BlogController.store)
router.get('/blogs', BlogController.getALL) ;
router.get('/blogs/:id', BlogController.singleBlog)
router.put('/blogs/:id', upload.single('featureImage'), BlogController.update)
router.delete('/blogs/:id', BlogController.delete)
router.get('/bookings/:id', BookingController.getALL ) 
router.get('/bookingview/:id', BookingController.singleBooking ) 
router.delete('/bookings/:id',  BookingController.delete)



router.post('/admin-add', UserController.adminAdd)
router.get('/users', UserController.getALL ) 
router.delete('/users/:id',UserController.delete)



router.post('/sliders', upload.single('sliderImage'), SliderController.store)
router.get('/sliders', SliderController.getALL ) 
router.delete('/sliders/:id',SliderController.delete)


router.post('/testimonials' ,TestimonialController.store )
router.get('/testimonials', TestimonialController.getALL ) 
router.delete('/testimonials/:id',TestimonialController.delete)
module.exports = router;