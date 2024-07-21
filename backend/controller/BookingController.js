const Contact = require("../models/ContactModel")
const packageModel = require("../models/packageModel")
const bookingModel = require("../models/BookingModel")
const agencyModel = require("../models/agencyModel")
const userModel = require("../models/userModel")
const nodemailer = require('nodemailer');
class BookingController {

  static  store = async (req,res) => {


    try {


        const prefix = 'INV'; // Customize your prefix
        const randomNumber = Math.floor(Math.random() * 1000000); // Generates a number between 0 and 999999
        const paddedNumber = String(randomNumber).padStart(6, '0'); // Pads number with leading zeros if necessary
        const invoiceNumber =  `${prefix}-${paddedNumber}`;

        const {firstName , lastName , email  , number , address , members , packageId } = req.body;

        const Package = await packageModel.findById(packageId).populate("agencyId");

        const agencyDetail = await agencyModel.findById(Package.agencyId._id).populate("userId");
               

  

        var date_time = new Date();
       
       
        const emailTemplate = `
  <html>
    <head>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.9/semantic.min.css"></link>
      <style>
  

body{
  background:#EEE;
  /* font-size:0.9em !important; */
}

.bigfont {
  font-size: 3rem !important;
}
.invoice{
  width:970px !important;
  margin:50px auto;
}

.logo {
  float:left;
  padding-right: 10px;
  margin:10px auto;
}

dt {
float:left;
}
dd {
float:left;
clear:right;
}

.customercard {
  min-width:65%;
}

.itemscard {
  min-width:98.5%;
  margin-left:0.5%;
}

.logo {
  max-width: 5rem;
  margin-top: -0.25rem;
}

.invDetails {
  margin-top: 0rem;
}

.pageTitle {
  margin-bottom: -1rem;
}

      </style>
    </head>
    <body>
<div class="container invoice">
  <div class="invoice-header">
    <div class="ui left aligned grid">
      <div class="row">
        <div class="left floated left aligned six wide column">
          <div class="ui">
            <h1 class = "ui header pageTitle">Package  Invoice <small class = "ui sub header">With Credit</small></h1>
            <h4 class="ui sub header invDetails">NO: ${invoiceNumber} | Date: ${date_time} </h4>
          </div>
        </div>
        <div class="right floated left aligned six wide column">
          <div class="ui">
            <div class="column two wide right floated">
             
              <ul class="">
            
                <li>info@travelex.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="ui segment cards">
    <div class="ui card">
      <div class="content">
        <div class="header">Company Details</div>
      </div>
      <div class="content">
        <ul>
          <li> <strong> Name: ${Package.agencyId.agencyName} </strong> </li>
          <li><strong> Address: </strong> ${Package.agencyId.agencyAddress}</li>
          <li><strong> Phone: </strong> ${Package.agencyId.agencyNumber}</li>
          <li><strong> Email: </strong>  ${agencyDetail.userId.email} </li>
          
        </ul>
      </div>
    </div>
    <div class="ui card customercard">
      <div class="content">
        <div class="header">Customer Details</div>
      </div>
      <div class="content">
        <ul>
          <li> <strong> Name: ${firstName} ${lastName} </strong> </li>
          <li><strong> Address: </strong> ${address} </li>
          <li><strong> Phone: </strong> ${number} </li>
          <li><strong> Email: </strong> ${email} </li>
          <li><strong> Members: </strong> ${members} </li>
        </ul>
      </div>
    </div>

    <div class="ui segment itemscard">
      <div class="content">
        <table class="ui celled table " border='1'>
          <thead>
            <tr>
              <th>Item / Details</th>
              <th class="text-center colfix">Price Person</th>
              <th class="text-center colfix">Members</th>
              <th class="text-center colfix">Start Date</th>
              <th class="text-center colfix">End Date</th>
              <th class="text-center colfix">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
              ${Package.location}
                
              </td>
              <td class="text-right">
                <span class="mono">$ ${Package.price} </span>
                
              </td>
              <td class="text-right">
                <span class="mono"> ${members} </span>
            
              </td>
              <td class="text-right">
                <span class="mono">${Package.startDate} </span>
                
              </td>
              <td class="text-right">
                <span class="mono">${Package.endDate}</span>
               
              </td>
              <td class="text-right">
                <strong class="mono">$ ${Package.price * members} </strong>
               
              </td>
            </tr>

           
          </tbody>
         <tfoot class="full-width">
    <tr>
      <th> Total: </th>
      <th colspan="2"></th>
      <th colspan = "1">  </th>
      <th colspan = "1">  </th>
      <th colspan = "1"> $ ${Package.price * members}.00 </th>
    </tr>
  </tfoot>
        </table>

      </div>
    </div>

    <div class="ui card">
      <div class="content center aligned text segment">
        <small class="ui sub header"> Amount Due (AUD): </small>
        <p class="bigfont"> $ ${Package.price * members}.00</p>
      </div>
    </div>
        <div class="ui card">
      <div class="content">
        <div class="header">Payment Details</div>
      </div>
      <div class="content">
        <p> <strong> Account Name: </strong> "RJCA" </p>
        <p> <strong> BSB: </strong> 111-111 </p>
        <p> <strong>Account Number: </strong> 123410133322 </p>
      </div>
    </div>
    <div class="ui card">
      <div class="content">
        <div class="header">Notes</div>
      </div>
      <div class="content">
        Payment is requested within 15 days of recieving this invoice.
      </div>
    </div>
  </div>
</div>
    </body>
  </html>
`;



// Create a transporter using SMTP transport
const transporter = nodemailer.createTransport({
    host: 'sunupsolar.agency',
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'travelix@sunupsolar.agency',  // Your email address
      pass: 'K]m1H,BS.$8#'  // Your email password or application-specific password
    }
  });

// K]m1H,BS.$8#

// Email content with HTML template
const mailOptions = {
    from: 'travelix@sunupsolar.agency',  // Sender address
    to: email ,
    cc: agencyDetail.userId.email,  // List of CC recipients
    bcc: 'raoawaisdev888@gmail.com',  // List of recipients
    subject: 'Test Email with HTML Template',  // Subject line
    html: emailTemplate  // HTML content
  };
  
  // Send email
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.error('Error sending email:', error);
    } else {
      console.log('Email sent:', info.response);
    }
  });


  const bookingDoc = bookingModel({
    firstName,
    lastName,
    email,
    address,
    number,
    members, 
    packageId:packageId,
    userId:agencyDetail.userId,
    invoiceNumber

})

await bookingDoc.save();
res.json({
    success:true,
    message:"Thank you ! Your Order Successfully placed"
})
        
    } catch (error) {
     
        console.log(error);
        res.json({
            success:false,
            message:error
        })
    }

  }


  static contact = async (req,res)=>{

    try {
        
        
            const { contact_form_name, contact_form_email, contact_form_subject, contact_form_message } = req.body;
            console.log(req.body);
          
            const newContact = new Contact({
              name: contact_form_name,
              email: contact_form_email,
              subject: contact_form_subject,
              message: contact_form_message,
            });
          
            await newContact.save()
                res.json({
                    success:true,
                    message:"Message succussfully sent Suppurt team will contact you"
                })
    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message: error
        })
    }
  }



  static getALL = async (req,res) =>{

    try {
        
         const id = req.params.id ;
         const user = await userModel.findById(id);    
         const role = user.role;
        if(role === 2 ){
          const bookingsData = await bookingModel.find({userId:id}).populate("packageId")
            
          console.log("booking data:::::::::::::::::::" , bookingsData );
          res.json({
            success:true,
            message:"successfully fetched",
            bookings:bookingsData
        })

         }

         if(role === 1) {

            const bookingsData = await bookingModel.find().populate("packageId")
            
            console.log("booking data:::::::::::::::::::" , bookingsData );
            res.json({
              success:true,
              message:"successfully fetched",
              bookings:bookingsData
          })

         }



       

    } catch (error) {
        console.log(error)
        res.json({
            success:false,
            message:error
        })
    }
  }





  static delete = async (req, res) => {
    const Id = req.params.id;
  
    try {
      const deletedAgency = await bookingModel.findByIdAndDelete(Id);
      if (!deletedAgency) {
        return res.status(404).json({ success: false, error: 'Booking not found' });
      }
      res.json({ success: true, message: 'Booking deleted successfully' });
    } catch (error) {
      console.error('Error deleting Booking:', error);
      res.status(500).json({ success: false, error: 'Failed to delete Booking' });
    }
  };




  static singleBooking = async (req, res) => {
    const bookingId = req.params.id;
   
  
    try {
      const agency = await bookingModel.findById(bookingId);
      if (!agency) {
        return res.status(404).json({ success: false, error: 'Booking not found' });
      }
      res.json({ success: true, agency });
    } catch (error) {
      console.error('Error fetching Booking:', error);
      res.status(500).json({ success: false, error: 'Failed to fetch Booking' });
    }
  };

}

module.exports = BookingController