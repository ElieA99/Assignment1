// Import necessary modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    singer: {
        type: String,
        required: true,
    },
    category: {
        type: mongoose.Types.ObjectId, ref: "Category"
    },
    album: {
        type: mongoose.Types.ObjectId, ref: "Album"
    },
});

module.exports = mongoose.model('Song', SongSchema);