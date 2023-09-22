const express = require('express');
const router = express.Router();
const userprofileMiddleware = require('../middleware/loginMiddleware');
const loginMiddleware = require('../middleware/loginMiddleware');
const userprofileController = require('../controller/userprofileController');

router.get("/profile", userprofileMiddleware.userProfile, userprofileController.userProfile);

module.exports = router;