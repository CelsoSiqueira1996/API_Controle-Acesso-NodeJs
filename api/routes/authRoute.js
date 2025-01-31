const express = require('express');
const AuthController = require('../controllers/authController');

const router = express.Router();

router
    .post("/auth/login", AuthController.login);

module.exports = router;