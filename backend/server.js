const bodyparser = require('body-parser')
const path = require('path');
const cors = require('cors')
const express = require('express');
const passport = require('passport');


const connectDB = require('./config/db');

if(process.env.NODE_ENV == "production"){
    app.use(express.static("frontend/build"));
}
const port = process.env.PORT || 5000;

// const corsOpts = {
//   origin: '*',
//   methods: [
//     'GET',
//     'POST',
//   ],
//   allowedHeaders: [
//     'Accept',
//     'Content-Type',
//   ],
// };

require('dotenv').config();
connectDB();

const app = express();

// Body-parser middleware
app.use(bodyparser.urlencoded({ extended: false }))
app.use(bodyparser.json());
app.use(cors());
app.use(passport.initialize());
require('./middleware/passport')(passport);


// User login and register 
app.use('/api/user', require('./routes/user/userRoutes'));

// Admin routes
app.use('/api/admin', require('./routes/admin/adminRoutes'));

// razorpay 2
app.use('/razorpay', require('./routes/payment/paymentRoute'));

// donations
app.use('/donations', require('./routes/payment/donationRoute'));


app.listen(port, () => console.log(`Server started on port ${port}`));
