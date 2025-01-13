
const express = require('express');
const userRegister = require('../../Controllers/UserControllers/userRegister');
const router = express.Router();

router.post('/userRegister', userRegister);

module.exports = router;