const router = require('express').Router(); 

const userModel = require('../models/users/userModel');

// Register a new user
router.post('/register', userModel.registerUser);

// login a user
router.post('/login', userModel.loginUser);




module.exports = router;