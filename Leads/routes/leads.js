const router = require('express').Router();
const Controller = require('../LeadController/LeadController');


//get all leads
router.get('/', Controller.getAllLeads);
//get lead by id
router.get('/:id', Controller.getLeadbyId);
//get leads by phone number
router.get('/phone', Controller.getByPhoneNumber);
//get leads by first Name
router.get('/first', Controller.getByFirstName);
//get leads by last Name
router.get('/last', Controller.getByLastName);
//get leads by Campaign
router.get('/type', Controller.getByCampaignType);
//get leads by Disposition
router.get('/dispo', Controller.getByDispositionType);
//Add new lead
router.post('/addLead', Controller.addNewLead);
//update lead
router.patch('/updateLead/:id', Controller.updateLead);
//delete lead
router.delete('/deleteById/:id', Controller.deleteLeadById);
module.exports=router;