const express = require('express');
const songRouter = express.Router();
const song = require('./Song.controller');
const isauth = require('../configs/auth');

//add song route
songRouter.post('/add', song.addSong);

//delete song route
songRouter.delete('/delete/:id', song.deleteSong);

//get by album id
//songRouter.get('/getid/:albumID', isauth, song.byAlbum);

module.exports = songRouter;