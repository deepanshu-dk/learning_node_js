const express = require('express');
const router = express.Router();
const userController = require('./controller/user.controller');

router.get('/get', userController.getUser);
router.get('/post', userController.postUser);
router.get('/delete', userController.deleteUser);

module.exports = router;