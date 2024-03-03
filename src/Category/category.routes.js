// Import necessary modules
const express = require('express');
const categoryRouter = express.Router();
const categoryController = require('./category.controller')

//Create a Category Route
categoryRouter.post('/post', categoryController.createCategory);

//route to get all available categories
categoryRouter.get('/get', categoryController.getCategory);

module.exports = categoryRouter;