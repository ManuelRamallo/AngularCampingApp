
const bcrypt = require('bcrypt-nodejs');
const service = require('../services');
const User = require('../models/users');

// POST Crear nuevo usuario
module.exports.signUp = (req, res) => {

    let user = new User({
        email: req.body.email,
        nombre: req.body.nombre,
        password: req.body.password,
        nombre_grupo: req.body.nombre_grupo
    });

    user.save((err, result) => {
        if (err) return res.status(500).jsonp({
                    error: 500,
                    mensaje: `${err.message}`
        });

        return res.status(201).jsonp({
            token: service.createToken(user),
            nombre: result.nombre,
            nombre_grupo: result.nombre_grupo,
            email: result.email,
            avatar: result.avatar
        });

    });

}

//POST login

module.exports.signIn = (req, res) => {

    User.findOne({email: req.body.email}).select('_id email +password nombre nombre_grupo').exec((err, user) => {

            if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});
            if (!user) return res.status(404).jsonp({error: 404, mensaje: 'No existe el usuario'});

            bcrypt.compare(req.body.password, user.password, (err, result) => {
                if (err) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});
                if (result == false) return res.status(401).jsonp({error: 401, mensaje: 'Error en la autenticación'});

                else {
                    req.user = user;
                    res.status(200).jsonp({
                        mensaje: 'Login correcto',
                        token: service.createToken(user),
                        email: user.email,
                        nombre_grupo: user.nombre_grupo
                    });
                }
            });

        });

};

//GET Listar los usuarios
module.exports.list = (req, res) =>  {

    User.find()
        .populate('campaign', 'nombre')
        .select('_id nombre email nombre_grupo campaign').exec((err, result) => {

            if (err) return res.status(500).jsonp({
                error: 500,
                mensaje: err.message
            });

            if (result && result.length) {
                res.status(200).jsonp(result);
            } else {
                res.sendStatus(404);
            }


        });

}








