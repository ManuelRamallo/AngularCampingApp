const Categories = require('../models/categories');
const Campaign = require('../models/campaign');


//Get Mostrar todas las categorias de la campaña
module.exports.findAllByCamp = (req, res) => {

    Campaign.findById(req.params.id, (err, campaign) => {
        if(err) return res.status(404).jsonp({error: 404, mensaje: 'No existe una campaña con ese Id'});

        Categories.find({campaign: campaign}).exec((err, result) => {
           res.status(200).jsonp(result);
        });
    });
};