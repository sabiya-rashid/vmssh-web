const express = require('express')
const router = express.Router()
const passport = require('passport');
require('../../middleware/passport')(passport);
const {
  registerUser,
  loginUser,
  } = require('../../controllers/user/userController')
const { guard } = require('../../middleware/authMiddleware')
// const { protect } = require('../middleware/authMiddleware')

router.post('/register', registerUser)
router.post('/login', 
// passport.authenticate('jwt', { session: false }), 
loginUser)


module.exports = router