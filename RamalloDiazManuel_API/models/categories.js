const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let categoriesSchema = new Schema({
    nombre: String,
    campaign: {type: Schema.ObjectId, ref: 'Campaigns'}
});

module.exports = mongoose.model('Categories', categoriesSchema);


