const express = require('express');
const userRouter = express.Router();
const User = require('./user.controller');

//SignIn Route
userRouter.post('/signup', User.signIn);

//Login Route
userRouter.post('/login', User.login);

module.exports = userRouter