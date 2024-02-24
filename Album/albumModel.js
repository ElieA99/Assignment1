// Import necessary modules
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    showNbTracks: {
        type: Number,
        default: 0,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    lastSongAddedAt: {
        type: Date
    },
});

module.exports = mongoose.model('Album', AlbumSchema);