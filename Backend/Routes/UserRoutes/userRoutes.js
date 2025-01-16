const express = require('express');
const userRegister = require('../../Controllers/UserControllers/userRegister');
const verifyEmail = require('../../Controllers/VerifyEmail/verifyEmail');
const userLogin = require('../../Controllers/UserControllers/userLogin');
const router = express.Router();


router.post('/userRegister', userRegister);

router.post('/userLogin', userLogin);

router.post('/verifyEmailofUser', verifyEmail);


module.exports = router;