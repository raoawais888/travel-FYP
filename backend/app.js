const env = require("dotenv");
env.config();
const express = require("express");
const cors = require("cors");
const app = express();
const paypal = require('paypal-rest-sdk');
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
// Configure PayPal
paypal.configure({
    mode: 'sandbox', // Sandbox or live
    client_id:"AZ0xv217NzyDyy3OmjQBhnew5oxN2JVXeCn9HjyPf54sydnCtRaD0YQ5_qFVkdZ7DWm8emTAtll_3-OJ",
    client_secret: "EDcFB5K8OJAuMXxAkP0GNqvus5kt6PdXZAOK-cUvzuC-mbsynxkcty-MgmdtRzS1uC7OLZysdTAlg_yr",
  });


  // Payment route
  app.post('/pay', (req, res) => {
    const create_payment_json = {
      intent: 'sale',
      payer: {
        payment_method: 'paypal',
      },
      redirect_urls: {
        return_url: 'http://localhost:3000/success',
        cancel_url: 'http://localhost:3000/cancel',
      },
      transactions: [
        {
          item_list: {
            items: [
              {
                name: 'item',
                sku: 'item',
                price: '1.00',
                currency: 'USD',
                quantity: 1,
              },
            ],
          },
          amount: {
            currency: 'USD',
            total: '1.00',
          },
          description: 'This is the payment description.',
        },
      ],
    };
  
    paypal.payment.create(create_payment_json, (error, payment) => {
      if (error) {
        throw error;
      } else {
        for (let i = 0; i < payment.links.length; i++) {
          if (payment.links[i].rel === 'approval_url') {
            res.redirect(payment.links[i].href);
          }
        }
      }
    });
  });


  app.get('/success', (req, res) => {
    const payerId = req.query.PayerID;
    const paymentId = req.query.paymentId;
  
    const execute_payment_json = {
      payer_id: payerId,
      transactions: [
        {
          amount: {
            currency: 'USD',
            total: '1.00',
          },
        },
      ],
    };
  
    paypal.payment.execute(paymentId, execute_payment_json, (error, payment) => {
      if (error) {
        console.log(error.response);
        throw error;
      } else {
        res.send('Success');
      }
    });
  });
  
  app.get('/cancel', (req, res) => res.send('Cancelled'));
app.listen(port , ()=>{
    console.log(`http://localhost:${port}`);
})