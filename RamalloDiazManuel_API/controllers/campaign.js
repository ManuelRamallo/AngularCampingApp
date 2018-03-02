
const Campaign = require('../models/campaign');
const User = require('../models/users');

//GET Obtener todas las campañas /list
module.exports.findAllCampaign = (req, res) => {

    Campaign.find((err, campaigns) => {
       if(err) return res.status(500).jsonp({
           error: 500,
           mensaje: `${err.message}`
       });

       //res.status(200).jsonp(campaigns);

        if (campaigns && campaigns.length) {
            User.populate(campaigns, {path: "usuario", select: '_id nombre email avatar'}, (err, campaings) =>{
                res.status(200).jsonp(campaings);
            });
        } else {
            res.sendStatus(404);
        }

    })
};

//POST Agregar una campaña /join
module.exports.joinCamp = (req, res) => {

  Campaign.findOne({campaignCode: req.body.campaignCode}).select('_id nombre').exec((err, campaign) => {

      if(err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticacion'});
      if (!campaign) return res.status(404).jsonp({error: 404, mensaje: 'Error en el código'});


        User.update({_id: req.user}, {$push: {campaign: campaign}}, (err, user) => {
           if(err) return res.status(500).jsonp({error: 500, mensaje: `${err.message}`})
        });
          res.status(200).jsonp(campaign)
      });
};


//GET Listar mis campañas
module.exports.myList = (req, res) => {

    User.find({_id: req.user}, {campaign: true}, (err, campaigns) => {
       User.populate(campaigns, {path: "campaign", select: '_id nombre campaignCode'}, (err, campaigns) =>{
           if (err) return res.status(500).jsonp({error: 500, mensaje: `${err.message}`});

           res.status(200).jsonp(campaigns[0].campaign);
       });
    });
};


