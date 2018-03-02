const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let aportacionesSchema = new Schema({
    cantidad: Number,
    //fecha: Date,
    user: {type: Schema.ObjectId, ref: 'User'},
    campaign: {type: Schema.ObjectId, ref: 'Campaign'},
    category: {type: Schema.ObjectId, ref: 'Categories'}

});

module.exports = mongoose.model('Aportaciones', aportacionesSchema);
