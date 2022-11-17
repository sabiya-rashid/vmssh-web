const express = require('express');
const router = express.Router();
// const cron = require("node-cron");

const {
    createDonations,
    getDueDonations,
    getPaidDonations
} = require('../../controllers/payment/donationController')

// cron.schedule("*/2 * * * * *", function(){
//     console.log("Hi Cron is running");
// })
router.post('/createDonation', createDonations);
router.get('/getDueDonation', getDueDonations);
router.get('/getPaidDonations', getPaidDonations)

module.exports = router;