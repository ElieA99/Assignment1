// Import necessary modules
const config = require('../configs/config');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Userschema = Schema({
    name: String,
    email: String,
    password: String,
    registrationDate: Date,
    dateOfBirth: Date,
    location: {
        type: String,
        coordinate: Number
    },
},
    { timestamps: true }
);

module.exports = mongoose.model(config.tableName.user, Userschema)