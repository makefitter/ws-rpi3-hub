'use strict';

/*******************
 * User Route
 * path: /user
 ******************** */

let express = require('express');
let Controller = require('../controllers/User/UserController');
let router = express.Router();

router.post('/', Controller.create.post);
router.get('/', Controller.all.get);
router.get('/:id', Controller.read.get);
router.put('/:id', Controller.update.put);
router.delete('/:id', Controller.delete.delete);

module.exports = router;