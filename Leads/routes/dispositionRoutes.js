const router = require('express').Router();
const dispoController = require('../LeadController/dispositionController');

//get all dispo
router.get('/all', dispoController.getAllDisposition);

//get dispo by id
router.get('/:id', dispoController.getDispoByID);

//post new disposition
router.post('/addDispo', dispoController.postDisposition);

module.exports = router;