const express = require('express');
const router = express.Router();
const userprofileMiddleware = require('../middleware/loginMiddleware');
const loginMiddleware = require('../middleware/loginMiddleware');
const userprofileController = require('../controller/userprofileController');
const userController = require('../controller/userController');

router.get("/profile", userprofileMiddleware.userProfile, userprofileController.userProfile);
router.get("/logout", loginMiddleware.userProfile, userController.updateSessionlogout)
module.exports = router;