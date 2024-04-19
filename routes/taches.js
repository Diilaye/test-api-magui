const express = require("express");

const router = express.Router();

const tacheCtrl = require('../controllers/taches');


router.post('/', tacheCtrl.add);

router.get('/', tacheCtrl.all);

router.get('/:id', tacheCtrl.one);

router.put('/:id', tacheCtrl.update);

router.delete('/:id', tacheCtrl.delete);

module.exports = router;