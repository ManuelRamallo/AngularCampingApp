const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const config = require('./config');
const auth = require('./middlewares/auth');
const cors = require('cors');

mongoose.Promise = global.Promise;
mongoose.connect(config.MONGODB_URI, { useMongoClient: true })
    .then(
        () => {

            const Category = require('./models/categories');

            Category.find((err, result) => {
                if (!(result && result.length)) {
                    let cat1 = new Category({
                        nombre: "Aceite",
                        campaign: mongoose.Types.ObjectId('5a24397f734d1d5aaf0e5638')
                    });
                    cat1.save((err, result) => {
                        if (err) return console.error(`Error de inserción: ${err.message}`);
                        console.log(`Insertado: ${result}`);
                    });

                } else {
                    console.log('Ya hay datos');
                }
            });

            const Aportaciones = require('./models/aportaciones');

            Aportaciones.find((err, result) => {
                if (!(result && result.length)) {
                    let aporta = new Aportaciones({
                        cantidad: 5,
                        fecha: Date.parse('10/12/2017'),
                        campaign: mongoose.Types.ObjectId('5a24397f734d1d5aaf0e5638'),
                        user: mongoose.Types.ObjectId('5a23fa461781d45240e62602'),
                        category: mongoose.Types.ObjectId('5a26971a6501b826a43cdf52')
                    });

                    aporta.save((err, result) => {
                        if (err) return console.log(`Error de insercion ${err.message}`);
                        console.log(`insertado: ${result}`);
                    });
                } else {
                    console.log('Ya hay datos');
                }
            });


        },
        (err) => {
            console.error(`Error de conexión: ${err.message}`);
        }
    );

const users = require('./routes/users');
const campaings = require('./routes/campaign');


let app = express();

app.use(logger('dev'));
app.use(cors());


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/api/v1/auth', users);
app.use('/api/v1/campaign', auth.isAuth, campaings);


module.exports = app;
