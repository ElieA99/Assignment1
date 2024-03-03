// Import necessary modules
const express = require('express');
const albumRouter = express.Router();
const albumController = require('./album.controller');

//router to get data
albumRouter.get('/get', albumController.getAlbum);

//router to add data
albumRouter.post('/post', albumController.createAlbum);

//router to delete
albumRouter.delete('/delete/:id', albumController.deleteAlbum);

//router to update
albumRouter.put('/update/:id', albumController.updateAlbum);

//router to get by ID
albumRouter.get('/get/:id', albumController.getalbumbyId);

module.exports = albumRouter;