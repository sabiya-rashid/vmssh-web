const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../../models/userModel');
const passport = require('passport');
const {validations} =require('express-validator')

require('../../middleware/passport')(passport);

// Register donor
const registerUser = async (req, res) => {
    const { name, email, password } = req.body
    //  if(!email.isEmail()){
    //     throw new Error('Please add a valid email')
    //  }
    if (!name || !email || !password) {
        res.status(400)
        throw new Error('Please add all the fields')
    }
    // Check if user exists
    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User already exists')
    }

    //   Hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // Create User
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })
    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            // token: generateToken(user._id)
        })
    }
    else {
        res.status(400)
        throw new Error('Invalid user data')
    }
}

// Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
        const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
            expiresIn: 604800 // 1 week
          });
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: 'jwt ' + token,
            // token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User')
    }
}

// // Generate token
// const generateToken = (id) => {
//     return jwt.sign({ id }, process.env.JWT_SECRET, {
//         expiresIn: '10d',
//     })
// }
module.exports = {
    registerUser,
    loginUser,
}