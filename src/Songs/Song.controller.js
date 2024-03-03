const joi = require('joi');
const mongoose = require('mongoose');
const Song = require('./SongModel');
const Album = require('../Album/albumModel');//album model 


//validation
const songValidation = joi.object({
    name: joi.string().required(),
    singer: joi.string().required(),
    category: joi.string().required(),
    album: joi.string().required(),
})

async function addSong(req, res) {
    try {
        const { name, singer, category, album } = req.body;

        //validation
        const value = songValidation.validate({ name, singer, category, album });
        if (value) { throw new Error(value.message) };

        const song = new Song({ name, singer, category: mongoose.Types.ObjectId, album: mongoose.Types.ObjectId });
        await song.save();
        return res.status(200).json({ message: 'New Song Added !!!', data: song });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

async function deleteSong(req, res) {
    try {
        const id = req.params.id;

        //check if song exist
        const ifExists = await Song.findOne({ _id: id });
        if (!ifExists) { return res.status(404).json({ error: 'ُSong not found' }); };

        //check album 
        const album = await Album.exists({ _id: ifExists })
        if (album) { return res.status(404).json({ error: 'ُAlbum not found' }); }

        const song = await Song.deleteOne({ _id: id });
        return res.status(200).json({ message: 'Song Deleted', data: song });

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//get song by albumID
async function byAlbum(req, res) {
    try {
        const getids = { album: albumID, category: categoryID }
        const songs = await Song.find(getids).sort({ createdAt });
        return res.status(200).json({ message: 'Songs', data: songs });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { addSong, deleteSong, byAlbum }