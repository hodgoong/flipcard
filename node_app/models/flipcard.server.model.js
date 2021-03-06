const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const FlipcardSchema = new Schema ({
    frontside: {
        type: String,
        required: 'Frontside input is required',
    },
    backside: {
        type: String,
        required: 'Backside input is required',
    },
    username: {
        type: String,
        required: 'Username is required',
    },
    note: {
        type: String
    },
    isRemoved:{
        type: Boolean
    },
    difficulty: {
        type: Number
    },
    index:{
        type: Number
    },
    created: {
        type: Date,
        default: Date.now
    },
    providerId: String,
    providerData: {}
});

mongoose.model('Flipcard', FlipcardSchema);
