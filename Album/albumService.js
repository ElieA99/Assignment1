const Album = require("./albumModel");

//ADD
async function addAlbum(name, description) {
    try {
        return await Album.create({ name, description });
    } catch (error) {
        console.log('Error ADDING the ALBUM:', error);
    }
};

//GET
async function getAlbum() {
    try {
        return await Album.findOne({});
    } catch (error) {
        console.log('ERROR GETTING THE ALBUM', error);
    }
};

//GET BY ID
async function getAlbumById(albumId) {
    try {
        return await Album.findOne({ _id: albumId });
    } catch (error) {
        console.log('ALBUM ID NOT FOUND', error);
    }
};

//DELETE
async function deleteAlbum(albumId) {
    try {
        return await Album.deleteOne({ _id: albumId });
    } catch (error) {
        console.log('ERROR DELETIN THE ALBUM:', error);
    }
};

//UPDATE
async function updateAlbum(albumId) {
    try {
        return await Album.updateOne({ _id: albumId });
    } catch (error) {
        console.log('ERROR UPDATING THE ALBUM:', error);
    }
};

//
module.exports = { addAlbum, deleteAlbum, updateAlbum, getAlbum, getAlbumById };