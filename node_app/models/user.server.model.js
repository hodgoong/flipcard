const mongoose = require('mongoose');
const crypto = require('crypto');
const Schema = mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        trim: true,
        unique: true,
        required: 'Name is required',
    },
    password: {
        type: String,
        // validate: [(password) => {
        //     return password && password.length > 6;
        // }, 'Password should be longer']
    },
    created: {
        type: Date,
        default: Date.now
    },
    salt: {
        type: String
    },
    provider: {
        type: String,
        required: 'Provider is required'
    },
    providerId: String,
    providerData: {}
});

UserSchema.pre('save', function(next) {
    console.log('saving the model....');
    if (this.password) {
        this.salt = new Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
        this.password = this.hashPassword(this.password);
    }
    next(); 
});

UserSchema.methods.hashPassword = function(password) {
    console.log('hashing the password....');
    return crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('base64');
};

UserSchema.post('save', function() {
    console.log('The user"' + this.userId + '"details were saved.');
});

UserSchema.methods.authenticate = function(password) {
    return this.password === this.hashPassword(password);
};

UserSchema.set('toJSON', { 
    getters: true
});

mongoose.model('User', UserSchema);