const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let campaignSchema = new Schema({
    nombre: String,
    campaignCode: {type: String, unique: true},
    //listaCategorias: {type: Schema.ObjectId, ref: 'Categorias'},
    //listaAportaciones: {type: Schema.ObjectId, ref: 'Aportaciones'}
});


module.exports = mongoose.model('Campaign', campaignSchema);