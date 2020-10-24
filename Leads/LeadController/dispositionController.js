const { json } = require('express');
let Dispositions = require('../models/lead/disposition.model');

exports.getAllDisposition = async (req, res) =>{
    console.log('getting all dispositions...');
    Dispositions.find()
    .then(dispo => res.json(dispo))
    .catch(err => res.status(400).send('Error: '+err));
};
//get disposition by ID
exports.getDispoByID = async(req, res) => {
    console.log('gettinf one dispo....');
    Dispositions.findById(req.params.id)
        .then(dispo => res.json(dispo))
        .catch(err => res.status(400).send('Error: '+err));
};

//post disposition
exports.postDisposition = async(req, res) => {
    const{dispositionName, dispositionDescription} = req.body;
    const newDispo = new Dispositions({dispositionName, dispositionDescription});
    console.log('Adding new dispo into the DB');
    newDispo.save()
        .then(()=> res.json('New disposition successfully added!!'))
        .catch(err => res.status(400).send('Error: '+err));
};