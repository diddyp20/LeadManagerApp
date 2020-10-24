const router = require('express').Router();
const campaignCOntroller = require('../LeadController/campaignController');

//get all campaign
router.get('/all', campaignCOntroller.getAllCampaign);

//get campaign by id
router.get('/:id', campaignCOntroller.getCampainById);

//post a campaign
router.post('/addCampaign', campaignCOntroller.postACampaign);

module.exports = router;