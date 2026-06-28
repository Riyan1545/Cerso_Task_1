const express = require('express');

const router = express.Router();

const controller = require('../controller/auth.controller')

router.post('/user/register', controller.registerUser);

module.exports = router;