const express = require('express');
const campaignController = require('../controllers/campaign');
const categoriesController = require('../controllers/categories');
const aportacionesController = require('../controllers/aportaciones');

let router = express.Router();

router.get('/list', campaignController.findAllCampaign);
router.post('/join', campaignController.joinCamp);
router.get('/myList', campaignController.myList);
router.get('/categories/:id', categoriesController.findAllByCamp);
router.post('/add', aportacionesController.addAportacion);
router.get('/aportaciones/:id', aportacionesController.findAllByCamp);
router.delete('/delete/:id', aportacionesController.deleteAportacion);

module.exports = router;