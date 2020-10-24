const { json } = require('express');
let Campaigns = require('../models/lead/campaign.model');


exports.getAllCampaign = async (req, res) => {
    await Campaigns.find()
        .then(x => res.json(x))
        .catch(err => res.status(400).send('Error: ' + err));
};

//Get campaign by ID
exports.getCampainById = async (req, res) => {
    await Campaigns.findById(req.params.id)
        .then(lead => res.json(lead))
        .catch(err => res.status(400).json('Error: '+err));
};
//post a campaign
exports.postACampaign = async(req, res) => {
    console.log(req.body);
    const {campaignName, campaignState, campaignDescription} = req.body;
    const newCampaign = new Campaigns({campaignName, campaignState, campaignDescription});
    console.log('Adding new campaigns....');
    newCampaign.save()
        .then(() => res.json('New Campaign added to the database'))
        .catch(err => res.status(400).send('Error: '+err));
};