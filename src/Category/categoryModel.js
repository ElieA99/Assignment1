// Import necessary modules
const config = require('../configs/config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = Schema({
    name: String,
    description: String,
    
    createdBy: { type: mongoose.Types.ObjectId, ref: config.tableName.user },
    updatedBy: { type: mongoose.Types.ObjectId, ref: config.tableName.user }
},
    { timestamps: true }
);

module.exports = mongoose.model(config.tableName.category, CategorySchema);