'use strict';

/*******************
 * AttributesRoute
 * path: /attributes
 ******************** */

let express = require('express');
let Controller = require('../controllers/Attributes/AttributesController');
let router = express.Router();

router.get('/', Controller.calculate.get);


module.exports = router;