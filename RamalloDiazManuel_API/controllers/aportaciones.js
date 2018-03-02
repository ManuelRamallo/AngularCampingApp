const Aportacion = require('../models/aportaciones');
const Campaign = require('../models/campaign');
const User = require('../models/users');
const Category = require('../models/categories');
const mongoose = require('mongoose');


//POST Añadir aportacion
module.exports.addAportacion = (req, res) => {

    User.find({_id: req.user}, (err, user) => {
        if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});
        if (!user) return res.status(404).jsonp({error: 404, mensaje: 'El usuario no existe'});

        Campaign.findOne({_id: req.body.campaign_id}, (err, campaign) => {
            if (err) return res.status(404).jsonp({error: 404, mensaje: 'No existe una campaña con ese Id'});

            Category.findOne({_id: req.body.id_category}, (err, category) => {
                if (err) return res.status(404).jsonp({error: 404, mensaje: 'No existe una categoria con ese Id'});


                let nuevaAportacion = new Aportacion ({
                    cantidad: req.body.cantidad,
                    user: mongoose.Types.ObjectId(user._id),
                    category: mongoose.Types.ObjectId(category._id),
                    campaign: mongoose.Types.ObjectId(campaign._id),
                });

                nuevaAportacion.save(function (err, apor) {
                   if(err) return res.status(500).jsonp({error: 500, mensaje: `${err.message}`});
                   res.status(201).jsonp(apor);
                });
            });
        });
    });
};

//GET Listar aportaciones
module.exports.findAllByCamp = (req, res) => {

    Campaign.findById(req.params.id, (err, campaign) => {
        if(err) return res.status(404).jsonp({error: 404, mensaje: 'No existe una campaña con ese Id'});

        Aportacion.find({campaign: campaign}).exec((err, result) => {
            res.status(200).jsonp(result);
        });
    });
};



//DELETE Eliminar una aportacion
module.exports.deleteAportacion = (req, res) => {

    Aportacion.findById(req.params.id, (err, aportacion)=>{
        if(aportacion === undefined)
            return res.sendStatus(404);

        aportacion.remove((err) => {
           if (err) return res.status(500).jsonp({error: 500, mensaje: `${err.message}`});
           res.sendStatus(204);
        });
    });
};