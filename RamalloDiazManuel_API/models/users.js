const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bcrypt = require('bcrypt-nodejs');
const crypto = require('crypto');


const userSchema = new Schema({

    nombre: String,
    email: {type: String, unique: true, lowercase: true},
    password: {type: String, select: false},
    nombre_grupo: String,
    avatar: String,
    campaign: [{type: Schema.ObjectId, ref: 'Campaign'}]

});


userSchema.pre('save', function (next) {

    let user = this;

    if (user.isModified('email')) {
        const md5 = crypto.createHash('md5').update(user.email).digest('hex');
        user.avatar = `https://gravatar.com/avatar/${md5}?s=200&d=retro`
    }

    if (!user.isModified('password')) return next();

    bcrypt.genSalt(10, (err, salt) => {

        if (err) return next();

        bcrypt.hash(user.password, salt, null, (err, hash) => {

            if (err) return next();

            user.password = hash;
            next();

        });
    })
});

module.exports = mongoose.model('User', userSchema);
