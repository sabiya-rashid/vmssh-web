const cron = require("node-cron");
const Donation = require('../../models/donationsModel.js');

cron.schedule("*/1 * * * * * ", function(){
    // Data to write on file
    let data = {donationType, user, payment};
    console.log("mellon");
    createDonations(data);
    console.log("heloo");
})
const createDonations = async (req, res) => {
    const { donationType, payment, user } = req.body

    if (!user || !payment || !donationType) {
        res.status(400)
        throw new Error('Please add all the fields')
    }

    // Create donation
    const donation = await Donation.create({
        user,
        payment,
        donationType,
    })
    if (donation) {
        res.status(201).json({
            payment: donation.payment,
            name: donation.user,
            type: donation.donationType,
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid donation data')
    }
}

const getDueDonations = async (req, res) => {
    try {
        const dueDonations = await Donation.find({
            payment: false

        })
        if (!dueDonations) {
            throw new Error('Something went wrong')
        }
        else {
            res.status(200)
            res.json({
                dueDonations
            })
        }
    } catch (error) {
        res.status(400);
        throw new Error('Donations not found')
    }

}

const getPaidDonations = async (req, res) => {
    try {
        const paidDonations = await Donation.find({
            payment: true

        })
        if (!paidDonations) {
            throw new Error('Something went wrong')
        }
        else {
            res.status(200)
            res.json({
                paidDonations
            })
        }
    } catch (error) {
        res.status(400);
        throw new Error('Paid Donations not found')
    }

}

module.exports = {
    createDonations,
    getDueDonations,
    getPaidDonations
}