//CRUD (Create, Read, Update and Delete)
const Album = require('./albumModel');
const User = require('../User/userModel');

//function to create an album
async function createAlbum(req, res) {
    try {
        const user = await User.findOne({ _id });
        const { name, description } = req.body;
        const album = new Album({ name, description, updatedBy: user._id, createdBy: user._id, });
        await album.save();
        return res.status(200).json({ message: 'New Album Added !!!', data: album });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//function to get album by ID
async function getalbumbyId(req, res) {
    try {
        const id = req.params._id;
        const album = await Album.findOne({ id });
        return res.status(200).json({ message: 'Album Retrived By ID', data: album });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//function to read the album
async function getAlbum(req, res) {
    try {
        const album = await Album.find({});
        return res.status(200).json({ message: 'Album Retrived', data: album });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//function to update the album
async function updateAlbum(req, res) {
    try {
        const { name, description } = req.body;
        const id = req.params.id;

        const ifExists = await Album.findOne({ _id: id });
        if (!ifExists) { return res.status(404).json({ error: 'ُAlbum not found' }); };

        const album = await Album.updateOne({
            id, name, description,
            updatedAt: Date.now()
        });
        return res.status(200).json({ message: 'Album Updated', data: album });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

//function to delete an album
async function deleteAlbum(req, res) {
    try {
        const id = req.params.id;

        const ifExists = await Album.findOne({ _id: id });
        if (!ifExists) { return res.status(404).json({ error: 'ُAlbum not found' }); };

        const album = await Album.deleteOne({ _id: id });

        return res.status(200).json({ message: 'Album Deleted', data: album });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = { createAlbum, getAlbum, updateAlbum, deleteAlbum, getalbumbyId };