import React, { useState, useEffect } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import axios from 'axios';

export default()=>{
    const location = useLocation();
    const leadId = location.state.id;
    //const[lead, setLead]=useState({});
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [Address, setAddress] = useState('');
    const [City, setCity] = useState('');
    const [Zip, setZip] = useState('');
    const [Type, setCampaign] = useState('');
    const [Phone, setphone] = useState('');
    const [Xencall, setDisposition]=useState('');
    const [leadNote, setLeadNote]=useState('');

    const fetchLead = async()=>{
        const res = await axios.get(`http://localhost:4001/${leadId}`);
        //setLead(res.data);
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
        setAddress(res.data.Address);
        setCity(res.data.City);
        setZip(res.data.Zip);
        if(typeof res.data.Type === 'undefined'){setCampaign('');}
        //setCampaign(res.data.Type);
        setphone(res.data.Phone );
        //setDisposition(res.data.Xencall);
        if(typeof res.data.Xencall === 'undefined'){setDisposition('');}
    };

    useEffect(()=>{fetchLead()},[]);

    const onSubmit = ()=>{
        console('leadName'+firstName);
    };

    return<div>
        <form onSubmit={onSubmit}>
            <div className="form-group">
                <label>First Name</label>
                <input value={firstName} onChange={e => setFirstName(e.target.value)} className="form-control" />
                <label>Last Name</label>
                <input value={lastName} onChange={e => setLastName(e.target.value)} className="form-control" />
                <label>Address</label>
                <input value={Address} onChange={e => setAddress(e.target.value)} className="form-control" />
                <label>City</label>
                <input value={City} onChange={e => setCity(e.target.value)} className="form-control" />
                <label>Zip</label>
                <input value={Zip} onChange={e => setZip(e.target.value)} className="form-control" />
                <label>Telephone</label>
                <input value={Phone} onChange={e => setphone(e.target.value)} className="form-control" />
                <label>Campaign</label>
                <input value={Type} onChange={e => setCampaign(e.target.value)} className="form-control" />
                <label>Dispositon</label>
                <input value={Xencall} onChange={e => setDisposition(e.target.value)} className="form-control" />
                <label>Notes</label>
                <textarea rows="6" value={leadNote} onChange={e => setLeadNote(e.target.value)} className="form-control"/>
            </div>
            <button className="btn btn-primary">Update</button>
        </form>
    </div>
};