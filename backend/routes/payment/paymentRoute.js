const express = require('express');
const router = express.Router();

const {
    createDonation,
    verifyDonation,
    getLogo
} = require('../../controllers/payment/paymentController')

router.post('/createPayment', createDonation);
router.post('/verifyPayment', verifyDonation);
router.get('/logo', getLogo)

module.exports = router;