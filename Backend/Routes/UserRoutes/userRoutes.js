const express = require('express');
const userRegister = require('../../Controllers/UserControllers/userRegister');
const verifyEmail = require('../../Controllers/VerifyEmail/verifyEmail');
const userLogin = require('../../Controllers/UserControllers/userLogin');
const userLogout = require('../../Controllers/UserControllers/userLogout');
const verifiedAuth = require('../../MiddleWear/AuthMiddleware/auth');
const router = express.Router();


router.post('/userRegister', userRegister);

router.post('/userLogin', userLogin);

router.get('/userLogout', verifiedAuth, userLogout);

router.post('/verifyEmailofUser', verifyEmail);


module.exports = router;