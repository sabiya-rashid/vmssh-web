const bcrypt = require('bcryptjs');
const  User  = require('../../models/userModel.js');

const getAllUsers = async (req, res) => {
    try {
        let users = await User.find()
        if (!users) {
            console.log('something went wrong')
            res.json({
                statusCode: '404',
            })
        } else {
            res.json({
                users
            })
        }
    } catch (error) {
        console.error(error)
        throw new Error('Users not found')
    }
}

const getParticularUser = async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        if (!user) {
            throw new Error('Something went wrong')
        }
        else {
            res.status(200)
            res.json({
                user
            })
        }
    } catch (error) {
        res.status(400);
        throw new Error('User not found')
    }
}
const updateParticularUser = async (req, res) => {
    try {
        var user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Can\'t find the user with this id'
            })
        } else {
            var updatedUser = await User.findByIdAndUpdate(req.params.id, req.body)
            if (!updatedUser) {
                return res.status(404).json({
                    message: 'Can\'t update the user'
                })
            } else {
                res.status(200).json({
                    statusCode: 200,
                    message: 'User updated Successfully'
                })
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error('Failed to update')
    }
}

const deleteParticularUser = async (req, res) => {
    try {
        var user = await User.findById(req.params.id)
        if (!user) {
            return res.status(404).json({
                statusCode: 404,
                message: 'Can\'t find the user with this id'
            })
        } else {
            var deleteUser = await User.findByIdAndDelete(req.params.id, req.body)
            if (!deleteUser) {
                return res.status(404).json({
                    message: 'Can\'t delete the user'
                })
            } else {
                res.status(200).json({
                    statusCode: 200,
                    message: 'User deleted Successfully'
                })
            }
        }
    } catch (error) {
        console.log(error);
        throw new Error('Failed to delete')
    }
}

const createUser = async (req, res) => {
    const { name, email, password } = req.body

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

module.exports = {
    getAllUsers,
    getParticularUser,
    updateParticularUser,
    deleteParticularUser,
    createUser,
}

