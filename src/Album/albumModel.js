// Import necessary modules
const config = require('../configs/config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AlbumSchema = Schema({
    name: String,
    description: String,

    createdBy: { type: mongoose.Types.ObjectId, ref: config.tableName.user },
    updatedBy: { type: mongoose.Types.ObjectId, ref: config.tableName.user },

    showNbTracks: {
        type: Boolean,
        default: true,
    },
    lastSongAddedAt: Date,
},
    { timestamps: true }
);

module.exports = mongoose.model(config.tableName.album, AlbumSchema);