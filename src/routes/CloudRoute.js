'use strict';

/*******************
 * Cloud Route
 * path: /cloud
 ******************** */

let express = require('express');
let Controller = require('../controllers/Cloud/CloudController');
let router = express.Router();

router.post('/', Controller.create.post);
//router.get('/', Controller.all.get);
router.get('/', Controller.read.get);

module.exports = router;