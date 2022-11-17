const Razorpay = require('razorpay')
const crypto = require('crypto');
const uniqId = require('uniqid');
const path = require('path');
const Payment = require('../../models/paymentModel');

const createDonation = async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.KEY_ID,
            key_secret: process.env.KEY_SECRET,
        });

        const options = {
            amount: 50000,
            currency: "INR",
            receipt: uniqId(),
        };

        const order = await instance.orders.create(options);

        if (!order) {
            return res.status(500).send("Some error occured");
        } else {
            res.json(order);
            const payment = await Payment.create(options)
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })
    }
}

const verifyDonation = async (req, res) => {
    try {
        const {
            razorpay_order_id,
            razorpay_payment_id,
            razorpay_signature
        } = req.body;

        const sign = razorpay_order_id + "|" + razorpay_payment_id;
        const expectedSign = crypto
            .createHmac("sha256", process.env.KEY_SECRET)
            .update(sign.toString())
            .digest('hex');
        if (razorpay_signature === expectedSign) {
            res.status(200).json({ message: "Payment Verified Successfully" })
            console.log(req.body);
        } else {
            res.status(401).json({ message: "Invalid signature send" })
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" })
    }
}
const getLogo = (req, res) => {
    res.sendFile(path.join(__dirname, "vmssh.svg"));
}
module.exports = {
    createDonation,
    verifyDonation,
    getLogo
}
