const Song = require("./SongModel");

//ADD song FN
async function addSong(name, singer, category, album) {
    try {
        return await Song.create({ name, singer, category, album });
    } catch (error) {
        console.log('ERROR ADDING THE SONG:', error);
    }
};

//Delete song FN
async function deleteSong(SongId) {
    try {
        return await Song.deleteOne({ _id: SongId });
    } catch (error) {
        console.log('ERROR DELETING:', error);
    }
};

module.exports = { deleteSong, addSong };