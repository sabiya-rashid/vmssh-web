const mongoose = require('mongoose');
const User = require('./userModel');
const Schema = mongoose.Schema
let DonationSchema = new Schema({
    donationId: {
        type: Number,
        key: true,
        auto: true
    },
    donationType: {
        type: String
    },
    id: String,
    status: String,
    user: {
        type: Schema.Types.ObjectId,
        ref:User
    },
    mihpayid: String,
    user: {
        type: String,
        required: true
    },
    currency:{
        type: String,
    },
    receipt:{
        type: String
    },
    payment:{
        type:Boolean
    },
    transactionId: {
        type: String
    },
    date: {
        type: Date
    }
}, {
    timestamps: true
})
const Donation = mongoose.model('Donation', DonationSchema)
module.exports = Donation
