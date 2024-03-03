// Import necessary modules
const config = require('../configs/config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const SongSchema = Schema({
    name: String,
    singer: String,

    categoryID: {
        type: mongoose.Types.ObjectId,
        ref: config.tableName.category,
    },
    albumID: {
        type: mongoose.Types.ObjectId,
        ref: config.tableName.album,
    },
},
    { timestamps: true }
);

//Indexing
SongSchema.index({ categoryID: 1 });
SongSchema.index({ albumID: 1 });

module.exports = mongoose.model(config.tableName.song, SongSchema);