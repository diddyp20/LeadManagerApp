const { json } = require('express');
let Lead = require('../models/lead/lead.model');

exports.getAllLeads = async (req, res) => {
    console.log(req.body);
    await Lead.find()
        .then(leads => res.json(leads))
        .catch(err => res.status(400).send('Error: ' + err));
};


//GEt lead by ID
exports.getLeadbyId = async (req, res) => {
    await Lead.findById(req.params.id)
        .then(lead => res.json(lead))
        .catch(err => res.status(400).json('Error: '+err));
};

exports.getByPhoneNumber = async (req, res) => {
    const Phone = req.body.Phone;
    console.log('Displaying all Data...')
    await Lead.find({ Phone: `${Phone}` })
        .then(leads => res.json(leads))
        .catch(err => res.status(400).send('Error :' + err));
};

exports.getByFirstName = async (req, res) => {
    const first = req.body.firstName;
    console.log('Displaying specific first name');
    await Lead.find({ firstName: `${first}` })
        .then(leads => res.json(leads))
        .catch(err => res.status(400).send('Error :' + err));
};

exports.getByLastName = async (req, res) => {
    const LastName = req.body.lastName;
    console.log('Displaying specific last name');
    await Lead.find({ lastName: `${LastName}` })
        .then(leads => res.json(leads))
        .catch(err => res.status(400).send('Error :' + err));
};

exports.getByCampaignType = async (req, res) => {
    const campaign = req.body.Type;
    console.log('Displaying specific campaign');
    await Lead.find({ Type: `${campaign}` })
        .then(leads => res.json(leads))
        .catch(err => res.status(400).send('Error :' + err));
};

exports.getByDispositionType = async (req, res) => {
    const disposition = req.body.Xencall;
    console.log('Displaying specific disposition');
    await Lead.find({ Xencall: `${disposition}` })
        .then(leads => res.json(leads))
        .catch(err => res.status(400).send('Error :' + err));
};

exports.addNewLead = async (req, res) => {
    const { firstName, lastName, Address, City, Zip, Xencall, Type, Phone } = req.body;

    const newLead = new Lead({ firstName, lastName, Address, City, Zip, Xencall, Type, Phone });
    console.log('Adding new lead...');
    await newLead.save()
        .then(() => res.json('Lead added!'))
        .catch(err => res.status(400).json('Error: ' + err));
};

//update leads
exports.updateLead = async(req, res)=>{
    await Lead.findByIdAndUpdate(req.params.id, 
        req.body, { new: true, runValidators: true })
        .then(()=> res.json('Lead Updated!'))
        .catch(err => res.status(400).json('Error: '+err));
};

//Delete lead
exports.deleteLeadById = async (req, res) => {
    await Lead.findByIdAndDelete(req.params.id)
        .then(()=>res.json('Successfully deleted!'))
        .catch(err => json.status(400).json("Error: "+err));
};