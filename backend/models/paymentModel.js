const mongoose = require('mongoose');
const User = require('./userModel');
const Schema = mongoose.Schema
let PaymentSchema = new Schema({
    paymentId: {
        type: Number,
        key: true,
        auto: true
    },
    paymentType: {
        type: String
    },
    id: String,
    status: String,
    user: {
        type: Schema.Types.ObjectId,
        ref:User
    },
    mihpayid: String,
    amount: {
        type: String,
        required: true
    },
    currency:{
        type: String,
    },
    receipt:{
        type: String
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
const Payment = mongoose.model('Payment', PaymentSchema)
module.exports = Payment
