const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },

    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },

    region: {
        type: String,
        required: true
    },


    year: {
        type: String,
    
    },

    langues: {
        type: String,
        
    },

    PhoneNumber: {
        type: Number,
        required: true
    },
    zipCode: {
        type: String,
        required: true
    },
    website: {
        type: String
    },
    AllServices: {
        type: Array,
        required: true
    },
    AllDemandes: {
        type: Array,
        required: true
    },
    Zone: {
        type: String,
        // required: true
    },
    availability: {
        type: Array,
        required: true
    },
    //  back :: adress => front :: VILLE   ===> (mrigla 5alha )
    adress: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Profile = mongoose.model('Profile', ProfileSchema)