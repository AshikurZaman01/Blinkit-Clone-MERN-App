const express = require('express');
const userRegister = require('../../Controllers/UserControllers/userRegister');
const verifyEmail = require('../../Controllers/VerifyEmail/verifyEmail');
const userLogin = require('../../Controllers/UserControllers/userLogin');
const userLogout = require('../../Controllers/UserControllers/userLogout');
const verifiedAuth = require('../../MiddleWear/AuthMiddleware/auth');
const uploadUserImage = require('../../Controllers/UserControllers/uploadUserImage');
const upload = require('../../MiddleWear/Multer/multer');
const userDetailsUpdate = require('../../Controllers/UserControllers/userDetailsUpdate');
const router = express.Router();


router.post('/userRegister', userRegister);

router.post('/userLogin', userLogin);

router.get('/userLogout', verifiedAuth, userLogout);

router.post('/verifyEmailofUser', verifyEmail);

router.put('/uploadUserImage', verifiedAuth, upload.single('image'), uploadUserImage)

router.put('/userDetailsUpdate', verifiedAuth, userDetailsUpdate);

module.exports = router;