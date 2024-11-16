const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    // ==================================================  (chbihem y3wdou fi zouz profil & user ?? !!)
    name: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    // =================================================

    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        // required: true
    },
    adress: {
        type: String,
        // required: true
    },
    PhoneNumber: {
        type: String,
        // required: true
    },
    region: {
        type: String,
        // required: true
    },
    website: {
        type: String,
        // required: true
    },
    year: {
        type: String,
        // required: true
    },
    zipCode: {
        type: String,
        // required: true
    },
    profilImg: {
        type: String,
        // required: true
    },
    languages: {
        type: Array,
        // required: true
    },
    avatar: {
        type: String
    },
    AllServices: {
        type: Array
    },
    // service: {
    //     type: Object
    // },
    // commentaire: {
    //     type: Object
    // },

    date: {
        type: Date,
        default: Date.now
    }
});


module.exports = User = mongoose.model('user', UserSchema);