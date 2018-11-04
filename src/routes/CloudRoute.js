'use strict';

/*******************
 * Cloud Route
 * path: /cloud
 ******************** */

let express = require('express');
let Controller = require('../controllers/Cloud/CloudController');
let router = express.Router();

router.post('/', Controller.create.post);
router.put('/', Controller.connectWs.put);
router.get('/', Controller.disconnectWs.get);


module.exports = router;